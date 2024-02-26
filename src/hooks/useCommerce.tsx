import api from '@/config/api'
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'

type IProduct = {
  id: number
  title: string
  price: number
  image: string
}

type ICart = IProduct & {
  quantity: number
}

export enum RemoveActionType {
  item = 'item',
  quatity = 'quatity',
}

enum LocalStorageProps {
  WeMoviesCart = 'WeMoviesCart',
}

type ICommerceContext = {
  products: Array<IProduct>
  isLoadingProducts: boolean
  errorMessage: string
  getProductsList: () => void
  cart: Array<ICart>
  addProductToCart: (product: IProduct) => void
  removeProductToCart: (productId: number, action?: RemoveActionType) => void
  quantityInCart: (productId: number) => number
  totalInCart: () => number
  handleChangeQuantityItemInCart: (productId: number, quantity: number) => void
  handleCompletePurchase: () => void
}

const INITIAL_COMMERCE_CONTEXT_VALUE = {
  products: [],
  isLoadingProducts: false,
  errorMessage: '',
  getProductsList: () => {},
  cart: [],
  addProductToCart: () => {},
  removeProductToCart: () => {},
  quantityInCart: () => 0,
  totalInCart: () => 0,
  handleChangeQuantityItemInCart: () => {},
  handleCompletePurchase: () => {},
}

const CommerceContext = createContext<ICommerceContext>(
  INITIAL_COMMERCE_CONTEXT_VALUE
)

export const CommerceProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Array<IProduct>>([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  const [cart, setCart] = useState<Array<ICart>>([])

  useEffect(() => {
    const updateLocalStorageCart = (cart: Array<ICart> = []) => {
      localStorage.setItem(LocalStorageProps.WeMoviesCart, JSON.stringify(cart))
    }

    updateLocalStorageCart(cart)
  }, [cart])

  if (typeof window !== 'undefined')
    useLayoutEffect(() => {
      const getLocalStorageCart = () => {
        const localStorageCart = localStorage.getItem(
          LocalStorageProps.WeMoviesCart
        )

        if (localStorageCart) {
          const localStorageCartParsed = JSON.parse(localStorageCart)

          if (Array.isArray(localStorageCartParsed))
            setCart(localStorageCartParsed)
        }
      }

      getLocalStorageCart()
    }, [])

  const getProductsList = useCallback(async () => {
    try {
      setIsLoading(true)
      setErrorMessage('')

      const response = await api.get<Array<IProduct>>('/products')
      const productResponse = response.data

      if (!Array.isArray(productResponse))
        throw new Error(
          'Não foi prossível listar os produtos, tente novamente mais tarde.'
        )
      setProducts(productResponse)
    } catch (err) {
      console.error(err)
      setErrorMessage(err.message)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const addProductToCart = (product: IProduct) => {
    const alreadyHasProduct = cart.find((item) => item.id === product.id)
    if (alreadyHasProduct) {
      setCart((prev) =>
        prev.map((item) => {
          if (item.id === alreadyHasProduct.id)
            return { ...item, quantity: item.quantity + 1 }
          return item
        })
      )
      return
    }

    const newCardItem = {
      ...product,
      quantity: 1,
    }

    setCart((prev) => [...prev, newCardItem])

    /* TO-DO
      - Add notification when a product added in the cart
    */
  }

  const removeProductToCart = (
    productId: number,
    action = RemoveActionType.quatity
  ) => {
    const removedProduct = cart.find((item) => item.id === productId)

    if (!removedProduct) throw new Error('Produto não econtrado no carrinho.')
    if (removedProduct.quantity > 1 && action === RemoveActionType.quatity) {
      setCart((prev) =>
        prev.map((item) => {
          if (item.id === productId)
            return { ...item, quantity: item.quantity - 1 }
          return item
        })
      )
      return
    }
    setCart((prev) => prev.filter((item) => item.id !== productId))
  }

  const quantityInCart = (productId: number): number => {
    const productInCart = cart.find((item) => item.id === productId)
    return productInCart?.quantity || 0
  }

  const totalInCart = (): number => {
    const total = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)

    return total || 0
  }

  const handleChangeQuantityItemInCart = (
    productId: number,
    quantity: number
  ) => {
    if (typeof quantity !== 'number')
      throw new Error(
        'Não foi possível alterar a quantidade do produto, tente novamente mais tarde.'
      )
    if (quantity < 1) removeProductToCart(productId)
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === productId) return { ...item, quantity }
        return item
      })
    )
  }

  const handleCompletePurchase = () => {
    setCart([])
  }

  const values = {
    products,
    isLoadingProducts: isLoading,
    errorMessage,
    getProductsList,
    cart,
    addProductToCart,
    removeProductToCart,
    quantityInCart,
    totalInCart,
    handleChangeQuantityItemInCart,
    handleCompletePurchase,
  }

  return (
    <CommerceContext.Provider value={values}>
      {children}
    </CommerceContext.Provider>
  )
}

export default function useCommerce() {
  const context = useContext(CommerceContext)

  if (context === undefined) {
    throw new Error('useCommerce must be used within CommerceProvider')
  }

  return context
}

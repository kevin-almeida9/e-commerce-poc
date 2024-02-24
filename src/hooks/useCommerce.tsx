import api from '@/config/api'
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
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

type ICommerceContext = {
  products: Array<IProduct>
  isLoadingProducts: boolean
  errorMessage: string
  getProductsList: () => void
  cart: Array<ICart>
  addProductToCart: (product: IProduct) => void
  removeProductToCart: (productId: number) => void
}

const INITIAL_COMMERCE_CONTEXT_VALUE = {
  products: [],
  isLoadingProducts: false,
  errorMessage: '',
  getProductsList: () => {},
  cart: [],
  addProductToCart: () => {},
  removeProductToCart: () => {},
}

const CommerceContext = createContext<ICommerceContext>(
  INITIAL_COMMERCE_CONTEXT_VALUE
)

export const CommerceProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Array<IProduct>>([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  const [cart, setCart] = useState<Array<ICart>>([])

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
    const alreadyHasProductIndex = cart.findIndex(
      (item) => item.id === product.id
    )

    if (alreadyHasProductIndex > 0)
      return cart[alreadyHasProductIndex].quantity++

    const newCardItem = {
      ...product,
      quantity: 1,
    }

    setCart((prev) => [...prev, newCardItem])

    /* TO-DO
      - Add notification when a product added in the cart
    */
  }

  const removeProductToCart = (productId: number) => {
    const removedProduct = cart.find((item) => item.id === productId)

    if (!removedProduct) throw new Error('Produto não econtrado no carrinho.')
    if (removedProduct.quantity > 1) {
      setCart((prev) =>
        prev.map((item) => {
          if (item.id === productId)
            return { ...item, quantity: item.quantity-- }
          return item
        })
      )
    }
    setCart((prev) => prev.filter((item) => item.id !== productId))
  }

  const values = {
    products,
    isLoadingProducts: isLoading,
    errorMessage,
    getProductsList,
    cart,
    addProductToCart,
    removeProductToCart,
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

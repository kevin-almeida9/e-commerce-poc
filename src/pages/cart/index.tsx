import { CartEmpty, CartList, CartTitle } from '@/styles/Cart.styled'
import emptyCardSVG from '@/assets/empty-card.svg'
import Image from 'next/image'
import { Button } from '@/styles/Button.styled'
import { useRouter } from 'next/router'
import useCommerce, { RemoveActionType } from '@/hooks/useCommerce'
import { moneyFormatter } from '@/utils/formatters'
import Icon from '@/components/Icon'
import { theme } from '@/pages/_app'
import { useEffect } from 'react'

function CartEmptyComponent() {
  const router = useRouter()
  return (
    <CartEmpty>
      <CartTitle>Parece que não há nada por aqui &#58;&#40;</CartTitle>
      <Image
        src={emptyCardSVG}
        alt="Um ícone representando um carrinho de compras vazio."
      />
      <Button
        $width={'180px'}
        onClick={() => {
          router.push('/')
        }}
      >
        VOLTAR
      </Button>
    </CartEmpty>
  )
}

function Cart() {
  const {
    cart,
    totalInCart,
    handleChangeQuantityItemInCart,
    removeProductToCart,
    addProductToCart,
  } = useCommerce()

  return (
    <CartList>
      <thead>
        <tr>
          <th>PRODUTO</th>
          <th></th>
          <th>QTD</th>
          <th>SUBTOTAL</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(cart) &&
          cart.map((item) => {
            const subTotal = item.price * item.quantity
            return (
              <tr key={item.id}>
                <td>
                  <Image
                    priority
                    src={item.image}
                    alt={item.title}
                    width={89}
                    height={114}
                  />
                </td>
                <td>
                  <p>{item.title}</p>
                  <p>{moneyFormatter(item.price)}</p>
                </td>
                <td>
                  <Icon
                    name="do_not_disturb_on"
                    material="material-symbols-outlined"
                    color={theme.primaryColor}
                    onClick={() => removeProductToCart(item.id)}
                  />
                  <input
                    type="text"
                    onChange={(value) =>
                      handleChangeQuantityItemInCart(
                        item.id,
                        Number(value.target.value)
                      )
                    }
                    value={item.quantity}
                  />
                  <Icon
                    name="add_circle"
                    material="material-symbols-outlined"
                    color={theme.primaryColor}
                    onClick={() => addProductToCart(item)}
                  />
                </td>
                <td>
                  <p>{moneyFormatter(subTotal)}</p>
                </td>
                <td>
                  <Icon
                    name="delete"
                    material="material-icons"
                    color={theme.primaryColor}
                    onClick={() =>
                      removeProductToCart(item.id, RemoveActionType.item)
                    }
                  />
                </td>
              </tr>
            )
          })}
      </tbody>
      <tfoot>
        <tr>
          <td>
            <Button $width="236px">FINALIZAR PEDIDO</Button>
          </td>
          <td>
            <p>TOTAL</p>
            <p>{moneyFormatter(totalInCart())}</p>
          </td>
        </tr>
      </tfoot>
    </CartList>
  )
}

export default Cart

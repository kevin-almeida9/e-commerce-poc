import {
  CartList,
  CartListActions,
  CartListCell,
  CartListFooter,
  CartListHeaderWrapper,
  CartListItemQuantity,
  CartListItemTitle,
  CartListItemValue,
  CartListQuatityControl,
  CartListRow,
  CartListSubTotal,
  CartListTitleColumn,
  CartListTotalTitle,
  CartListTotalValue,
  CartListTotalWrapper,
  CartListWrapper,
} from '@/styles/Cart.styled'
import emptyCardSVG from '@/assets/empty-card.svg'
import Image from 'next/image'
import { Button } from '@/styles/Button.styled'
import { useRouter } from 'next/router'
import useCommerce, { RemoveActionType } from '@/hooks/useCommerce'
import { moneyFormatter } from '@/utils/formatters'
import Icon from '@/components/Icon'
import { theme } from '@/pages/_app'
import { Card, CardTitle } from '@/styles/Card.styled'
import { getTypeDevice } from '@/utils/device'

function CartEmpty() {
  const router = useRouter()
  return (
    <Card>
      <CardTitle>Parece que não há nada por aqui &#58;&#40;</CardTitle>
      <Image
        style={{ width: '100%' }}
        src={emptyCardSVG}
        alt="Um ícone representando um carrinho de compras vazio."
      />
      <Button
        $width={'180px'}
        $fontSize="0.875rem"
        onClick={() => {
          router.push('/')
        }}
      >
        VOLTAR
      </Button>
    </Card>
  )
}

function Cart() {
  const router = useRouter()
  const {
    cart,
    totalInCart,
    handleChangeQuantityItemInCart,
    removeProductToCart,
    addProductToCart,
    handleCompletePurchase,
  } = useCommerce()

  return (
    <CartListWrapper>
      <CartList>
        <CartListHeaderWrapper>
          <CartListTitleColumn $column="2">PRODUTO</CartListTitleColumn>
          <CartListTitleColumn>QTD</CartListTitleColumn>
          <CartListTitleColumn $column="2">SUBTOTAL</CartListTitleColumn>
        </CartListHeaderWrapper>

        {Array.isArray(cart) &&
          cart.map((item) => {
            const subTotal = item.price * item.quantity
            return (
              <CartListRow key={item.id}>
                <CartListCell $mobileOrder={0}>
                  <Image
                    priority
                    src={item.image}
                    alt={item.title}
                    width={getTypeDevice() === 'mobile' ? 64 : 89}
                    height={getTypeDevice() === 'mobile' ? 82 : 114}
                  />
                </CartListCell>
                <CartListActions>
                  <CartListCell
                    $mobileOrder={1}
                    $direction="column"
                    $column="1.50"
                    $mobileDirection="row"
                    $mobileGap="1rem"
                  >
                    <CartListItemTitle>{item.title}</CartListItemTitle>
                    <CartListItemValue>
                      {moneyFormatter(item.price)}
                    </CartListItemValue>
                  </CartListCell>
                  <CartListCell $column=".75" $mobileOrder={3}>
                    <CartListQuatityControl>
                      <Icon
                        name="do_not_disturb_on"
                        material="material-symbols-outlined"
                        color={theme.primaryColor}
                        onClick={() => removeProductToCart(item.id)}
                        size={18}
                      />
                      <CartListItemQuantity
                        type="number"
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
                        size={18}
                      />
                    </CartListQuatityControl>
                  </CartListCell>
                  <CartListCell
                    $mobileOrder={4}
                    $mobileDirection="column"
                    $column="2.25"
                    $mobileJustify="center"
                  >
                    <CartListSubTotal>SUBTOTAL</CartListSubTotal>
                    <CartListItemValue>
                      {moneyFormatter(subTotal)}
                    </CartListItemValue>
                  </CartListCell>
                  <CartListCell
                    $column=".25"
                    $rowAligh="flex-end"
                    $mobileOrder={2}
                  >
                    <Icon
                      size={18}
                      name="delete"
                      material="material-icons"
                      color={theme.primaryColor}
                      onClick={() =>
                        removeProductToCart(item.id, RemoveActionType.item)
                      }
                    />
                  </CartListCell>
                </CartListActions>
              </CartListRow>
            )
          })}
      </CartList>
      <CartListFooter>
        <Button
          $width="236px"
          $fontSize="0,875rem"
          onClick={() => {
            handleCompletePurchase()
            router.push('/purchase-made')
          }}
        >
          FINALIZAR PEDIDO
        </Button>

        <CartListTotalWrapper>
          <CartListTotalTitle>TOTAL</CartListTotalTitle>
          <CartListTotalValue>
            {moneyFormatter(totalInCart())}
          </CartListTotalValue>
        </CartListTotalWrapper>
      </CartListFooter>
    </CartListWrapper>
  )
}

function CartWrapper() {
  const { cart } = useCommerce()
  if (cart.length) return <Cart />
  return <CartEmpty />
}

export default CartWrapper

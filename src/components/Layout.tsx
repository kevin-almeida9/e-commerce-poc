import Header, {
  CartSubtitle,
  CartTitle,
  CartWrapper,
  Logo,
} from '@/styles/Header.styled'
import useCommerce from '@/hooks/useCommerce'
import React, { ReactNode } from 'react'
import Icon from '@/components/Icon'

function Layout({ children }: { children: ReactNode }) {
  const { cart } = useCommerce()

  return (
    <div className="layout-wrapper">
      <Header>
        <Logo>WeMovies</Logo>

        <CartWrapper>
          <div>
            <CartTitle>Meu Carrinho</CartTitle>
            <CartSubtitle>
              {cart.length} {cart.length === 1 ? 'item' : 'itens'}
            </CartSubtitle>
          </div>
          <Icon name="shopping_basket" />
        </CartWrapper>
      </Header>
      <div>{children}</div>
    </div>
  )
}

export default Layout

import Header, {
  CartSubtitle,
  CartTitle,
  CartWrapper,
  Logo,
} from '@/components/Header.styled'
import useCommerce from '@/hooks/useCommerce'
import React, { ReactNode } from 'react'

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
          <span className="material-symbols-outlined">shopping_basket</span>
        </CartWrapper>
      </Header>
      <div>{children}</div>
    </div>
  )
}

export default Layout

import {
  CartSubtitle,
  CartTitle,
  CartWrapper,
  Header,
  Logo,
} from '@/styles/Header.styled'
import useCommerce from '@/hooks/useCommerce'
import React, { ReactNode } from 'react'
import Icon from '@/components/Icon'
import { useRouter } from 'next/router'

function Layout({ children }: { children: ReactNode }) {
  const { cart } = useCommerce()
  const router = useRouter()

  return (
    <div className="layout-wrapper">
      <Header>
        <Logo
          onClick={() => {
            router.push('/')
          }}
        >
          WeMovies
        </Logo>
        <CartWrapper
          onClick={() => {
            router.push('/cart')
          }}
        >
          <div>
            <CartTitle>Meu Carrinho</CartTitle>
            <CartSubtitle>
              {cart.length} {cart.length === 1 ? 'item' : 'itens'}
            </CartSubtitle>
          </div>
          <Icon name="shopping_basket" />
        </CartWrapper>
      </Header>
      {children}
    </div>
  )
}

export default Layout

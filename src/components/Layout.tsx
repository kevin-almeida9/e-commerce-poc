import useCommerce from '@/hooks/useCommerce'
import React, { ReactNode } from 'react'

function Layout({ children }: { children: ReactNode }) {
  const { cart } = useCommerce()

  return (
    <div>
      <div>
        <h1>WeMovies</h1>

        <div>
          <div>
            <p>Meu Carrinho</p>
            <p>{cart.length} itens</p>
          </div>
          <span className="material-symbols-outlined">shopping_basket</span>
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Layout

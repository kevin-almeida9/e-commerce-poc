import Loading from '@/components/Loading'
import useCommerce from '@/hooks/useCommerce'
import Image from 'next/image'
import React, { useEffect } from 'react'

function Home() {
  const { products, getProductsList, isLoadingProducts } = useCommerce()

  useEffect(() => {
    getProductsList()
  }, [])

  return (
    <div>
      {isLoadingProducts ? (
        <Loading />
      ) : (
        Array.isArray(products) &&
        products.map((product) => (
          <div key={product.id}>
            <Image
              src={product.image}
              alt={product.title}
              width={147}
              height={188}
            />
            <p>{product.title}</p>
            <p>{product.price}</p>
            <button>
              <span>0</span>
              <span className="material-symbols-outlined">
                add_shopping_cart
              </span>
              ADICIONAR AO CARRINHO
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default Home

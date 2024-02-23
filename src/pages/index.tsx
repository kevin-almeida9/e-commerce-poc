import useCommerce from '@/hooks/useCommerce'
import React, { useEffect } from 'react'

function Home() {
  const { products, getProductsList } = useCommerce()

  useEffect(() => {
    getProductsList()
  }, [])

  return (
    <div>
      {Array.isArray(products) && products.map((product) =>(
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  )
}

export default Home
import Icon from '@/components/Icon'
import Loading from '@/components/Loading'
import useCommerce from '@/hooks/useCommerce'
import {
  Button,
  ButtonCounter,
  Card,
  CardPrice,
  CardTitle,
  ProductsList,
} from '@/styles/ProductsList.styled'
import { moneyFormatter } from '@/utils/formatters'
import Image from 'next/image'
import React, { useEffect } from 'react'

function Home() {
  const {
    products,
    getProductsList,
    isLoadingProducts,
    addProductToCart,
    quantityInCart,
  } = useCommerce()

  useEffect(() => {
    getProductsList()
  }, [])

  return (
    <div>
      {isLoadingProducts ? (
        <Loading />
      ) : (
        <ProductsList>
          {Array.isArray(products) &&
            products.map((product) => {
              const quantity = quantityInCart(product.id)

              return (
                <Card key={product.id}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={147}
                    height={188}
                  />
                  <CardTitle>{product.title}</CardTitle>
                  <CardPrice>{moneyFormatter(product.price)}</CardPrice>
                  <Button
                    disabled={quantity > 0}
                    onClick={() => addProductToCart(product)}
                    $selected={quantity > 0}
                  >
                    <ButtonCounter>
                      <Icon name="add_shopping_cart" size=".75rem" />
                      <span>{quantity}</span>
                    </ButtonCounter>
                    {quantity > 0 ? 'ITEM ADICIONADO' : 'ADICIONAR AO CARRINHO'}
                  </Button>
                </Card>
              )
            })}
        </ProductsList>
      )}
    </div>
  )
}

export default Home

import Icon from '@/components/Icon'
import Loading from '@/components/Loading'
import useCommerce from '@/hooks/useCommerce'
import {
  Button,
  ButtonCounter,
  ButtonText,
  CardProduct,
  CardProductPrice,
  CardProductTitle,
  ProductsList,
  ProductsListLoadingWrapper,
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
    <>
      {isLoadingProducts ? (
        <ProductsListLoadingWrapper>
          <Loading />
        </ProductsListLoadingWrapper>
      ) : (
        <ProductsList>
          {Array.isArray(products) &&
            products.map((product) => {
              const quantity = quantityInCart(product.id)

              return (
                <CardProduct key={product.id}>
                  <Image
                    priority
                    src={product.image}
                    alt={product.title}
                    width={147}
                    height={188}
                  />
                  <CardProductTitle>{product.title}</CardProductTitle>
                  <CardProductPrice>
                    {moneyFormatter(product.price)}
                  </CardProductPrice>
                  <Button
                    disabled={quantity > 0}
                    onClick={() => addProductToCart(product)}
                    $selected={quantity > 0}
                  >
                    <ButtonCounter>
                      <Icon name="add_shopping_cart" size=".75rem" />
                      <span>{quantity}</span>
                    </ButtonCounter>
                    <ButtonText>
                      {quantity > 0
                        ? 'ITEM ADICIONADO'
                        : 'ADICIONAR AO CARRINHO'}
                    </ButtonText>
                  </Button>
                </CardProduct>
              )
            })}
        </ProductsList>
      )}
    </>
  )
}

export default Home

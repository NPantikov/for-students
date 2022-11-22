import React, { useState } from 'react'
import { MainLayout } from 'shared'
import { CART_PRODUCTS } from '_mocks/mocks'
import { CartItem } from './components'

const Cart = () => {
  const [cartProducts, setCartProducts] = useState(CART_PRODUCTS)

  return (
    <MainLayout>
      {cartProducts.map((cartProduct) => (
        <CartItem
          key={cartProduct.id}
          id={cartProduct.id}
          title={cartProduct.title}
          image={cartProduct.image}
          price={cartProduct.price}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
        />
      ))}
    </MainLayout>
  )
}

export default Cart

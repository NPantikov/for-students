import { MainLayout } from 'shared'
import { CartItem } from './components'
import { useSelector } from 'react-redux'

const Cart = () => {
  const { cartProducts } = useSelector((state) => state.mainReducer)

  return (
    <MainLayout>
      {cartProducts.length > 0
        ? cartProducts.map((cartProduct) => (
            <CartItem
              key={cartProduct.id}
              id={cartProduct.id}
              title={cartProduct.title}
              image={cartProduct.image}
              price={cartProduct.price}
            />
          ))
        : 'Нет продуктов'}
    </MainLayout>
  )
}

export default Cart

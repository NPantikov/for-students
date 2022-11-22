import s from './CartItem.module.scss'

const CartItem = (props) => {
  const { id, title, image, price, cartProducts, setCartProducts } = props

  const onDeleteCartItem = () => {
    setCartProducts(cartProducts.filter((product) => product.id !== id))
  }

  return (
    <div className={s.root}>
      <img src={image} />
      <div className={s.title}>{title}</div>
      <div>{price}$</div>
      <button onClick={onDeleteCartItem}>Удалить</button>
    </div>
  )
}

export default CartItem

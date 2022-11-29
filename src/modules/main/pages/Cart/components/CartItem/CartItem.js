import { useDispatch } from 'react-redux'

import { removeProductFromCart } from '../../../../store/slice'
import s from './CartItem.module.scss'

const CartItem = (props) => {
  const { id, title, image, price } = props

  const dispatch = useDispatch()

  const onDeleteCartItem = () => {
    dispatch(removeProductFromCart(id))
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

import s from './ProductItem.module.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { addProductToCart } from '../../../../store/slice'

const ProductItem = (props) => {
  const { id, image, title, price } = props
  const navigate = useNavigate()

  // Redux
  const dispatch = useDispatch()

  const onAddToCart = (event) => {
    event.stopPropagation()

    dispatch(addProductToCart(id))
  }

  return (
    <div className={s.root} onClick={() => navigate(`/products/${id}`)}>
      <img className={s.image} src={image} />
      <div className={s.title}>{title}</div>
      <div className={s.price}>{price}$</div>
      <button onClick={onAddToCart}>Добавить в корзину</button>
    </div>
  )
}

export default ProductItem

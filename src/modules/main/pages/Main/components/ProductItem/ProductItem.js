import s from './ProductItem.module.scss'
import { useNavigate } from 'react-router-dom'

const ProductItem = (props) => {
  const { id, image, title, price } = props
  const navigate = useNavigate()

  return (
    <div className={s.root} onClick={() => navigate(`/products/${id}`)}>
      <img className={s.image} src={image} />
      <div className={s.title}>{title}</div>
      <div className={s.price}>{price}$</div>
    </div>
  )
}

export default ProductItem

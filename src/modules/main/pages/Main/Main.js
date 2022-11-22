import { useEffect, useState } from 'react'

import { MainLayout } from 'shared'
import api from '../../config/api'
import { ProductItem } from './components'

import s from './Main.module.scss'

const Main = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    api.fetchProducts().then((data) => {
      setProducts(data)
      setIsLoading(false)
    })
  }, [])

  return (
    <MainLayout>
      <div className={s.root}>
        {!isLoading ? (
          products.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </MainLayout>
  )
}

export default Main

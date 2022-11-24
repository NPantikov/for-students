import { useEffect, useRef, useState } from 'react'

import { MainLayout } from 'shared'
import api from '../../config/api'
import { ProductItem } from './components'

import s from './Main.module.scss'

const Main = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [foundProducts, setFoundProducts] = useState([])

  const searchButtonRef = useRef(null)

  useEffect(() => {
    setIsLoading(true)
    api.fetchProducts().then((data) => {
      setProducts(data)
      setFoundProducts(data)
      setIsLoading(false)
    })
  }, [])

  const onSearch = () => {
    setFoundProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase().trim())
      )
    )
  }

  return (
    <MainLayout>
      <div className={s.root}>
        <div className={s.search}>
          <input
            type='text'
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                searchButtonRef.current.click()
              }
            }}
          />
          <button type={'button'} onClick={onSearch} ref={searchButtonRef}>
            Поиск
          </button>
        </div>
        {!isLoading ? (
          foundProducts.map((product) => (
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

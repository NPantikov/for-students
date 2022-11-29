import { useEffect, useRef, useState } from 'react'

import { MainLayout } from 'shared'
import api from '../../config/api'
import { ProductItem } from './components'

import s from './Main.module.scss'

const Main = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Фильтрация
  const [searchInput, setSearchInput] = useState('')
  const [foundProducts, setFoundProducts] = useState([])

  // Фильтр по категириям
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])

  // Итоговые продукты
  const [totalProducts, setTotalProducts] = useState([])

  const searchButtonRef = useRef(null)

  // Первоначальная загрузка продуктов
  useEffect(() => {
    setIsLoading(true)
    api.fetchProducts().then((data) => {
      setProducts(data)
      setFoundProducts(data)
      setTotalProducts(data)

      setCategories(['', ...Array.from(new Set(data.map((item) => item.category)))])

      setIsLoading(false)
    })
  }, [])

  // Обработчик события при нажатии кнопки Поиск
  const onSearch = () => {
    setFoundProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase().trim())
      )
    )
  }

  // Фильтруем продукты по категории
  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(products.filter((product) => product.category === selectedCategory))
    } else {
      setFilteredProducts(products)
    }
  }, [selectedCategory, products])

  // Устанавливаем итоговый список продуктов в зависимости от найденных и отфильтрованных продуктов
  useEffect(() => {
    if (filteredProducts.length !== products.length) {
      const totalProducts = foundProducts.filter(
        (product) => filteredProducts.indexOf(product) !== -1
      )
      setTotalProducts(totalProducts)
    } else {
      setTotalProducts(foundProducts)
    }
  }, [foundProducts, filteredProducts])

  return (
    <MainLayout>
      <div className={s.root}>
        <div className={s.search}>
          <input
            type='text'
            value={searchInput}
            onChange={(event) => {
              setSearchInput(event.target.value)
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                searchButtonRef.current.click()
              }
            }}
          />
          <button type={'button'} onClick={onSearch} ref={searchButtonRef}>
            Поиск
          </button>

          <select
            name='select'
            value={selectedCategory}
            onChange={(event) => {
              setSelectedCategory(event.target.value)
            }}
          >
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>

          <button
            onClick={() => {
              setSearchInput('')
              setSelectedCategory('')
              setFoundProducts(products)
            }}
          >
            Сбросить фильтры и поиск
          </button>
        </div>
        {!isLoading ? (
          totalProducts.length !== 0 ? (
            totalProducts.map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))
          ) : (
            <h1>Совпадений не найдено...</h1>
          )
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </MainLayout>
  )
}

export default Main

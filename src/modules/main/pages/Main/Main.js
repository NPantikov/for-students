import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination, Stack } from '@mui/material'

import { MainLayout } from 'shared'
import api from '../../config/api'
import { ProductItem } from './components'

import s from './Main.module.scss'
import { setIsLoading, setProducts } from '../../store/slice'
import { getPageProducts } from './Main.utils'

const Main = () => {
  // Redux
  const { isLoading, products } = useSelector((state) => state.mainReducer)
  const dispatch = useDispatch()

  // Фильтрация
  const [searchInput, setSearchInput] = useState('')
  const [foundProducts, setFoundProducts] = useState([])

  // Фильтр по категириям
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])

  // Итоговые продукты
  const [totalProducts, setTotalProducts] = useState([])

  // Пагинация
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(5)
  const [pageCount, setPageCount] = useState(0)

  const searchButtonRef = useRef(null)

  // Первоначальная загрузка продуктов
  useEffect(() => {
    dispatch(setIsLoading(true))
    api.fetchProducts().then((data) => {
      dispatch(setProducts(data))
      setFoundProducts(data)
      setTotalProducts(getPageProducts(data, 0, 5))

      setCategories(['', ...Array.from(new Set(data.map((item) => item.category)))])

      dispatch(setIsLoading(false))
    })
  }, [])

  // Обработчик события при нажатии кнопки Поиск
  const onSearch = () => {
    setPage(0)
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
      setTotalProducts(getPageProducts(totalProducts, page, pageSize))
      setPageCount(Math.ceil(totalProducts.length / pageSize))
    } else {
      setTotalProducts(getPageProducts(foundProducts, page, pageSize))
      setPageCount(Math.ceil(foundProducts.length / pageSize))
    }
  }, [foundProducts, filteredProducts, page, pageSize])

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
              setPage(0)
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
              setPage(0)
            }}
          >
            Сбросить фильтры и поиск
          </button>
          {/*<input type='number' value={pageSize} onChange={(e) => setPageSize(e.target.value)} />*/}
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
      <Stack spacing={2}>
        <Pagination
          page={page + 1}
          count={pageCount}
          onChange={(event, page) => {
            setPage(page - 1)
          }}
          color='primary'
        />
      </Stack>
    </MainLayout>
  )
}

export default Main

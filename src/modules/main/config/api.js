import axios from 'axios'

const fetchProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data
  } catch (e) {
    console.log(e)
  }
}
const fetchProduct = async (productId) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    return response.data
  } catch (e) {
    console.log(e)
  }
}

const registration = async (formData) => {
  try {
    const response = await axios.post('http://localhost:5000/auth/registration', formData)
    if (response.data) {
      localStorage.setItem('accessToken', response.data.access_token)
    }
    return response.data
  } catch (e) {
    console.log(e)
  }
}

const login = async (formData) => {
  try {
    const response = await axios.post('http://localhost:5000/auth/login', formData)
    if (response.data) {
      localStorage.setItem('accessToken', response.data.access_token)
    }
    return response.data
  } catch (e) {
    console.log(e)
  }
}

const getRoles = async () => {
  try {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
      const response = await axios.get('http://localhost:5000/roles', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      return response.data
    }
  } catch (e) {
    console.log(e)
  }
}

const api = { fetchProducts, fetchProduct, registration, login, getRoles }

export default api

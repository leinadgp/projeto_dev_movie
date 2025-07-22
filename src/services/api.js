import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'a72e51e72578322c6c9ad31f14d9e3ee',
    languages: 'pt-BR',
    page: 1
  }
})

export default api

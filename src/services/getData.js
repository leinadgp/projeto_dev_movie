import api from './api'

export async function getMovies() {
  const {
    data: { results }
  } = await api.get('/movie/popular?language=pt-BR-US')

  return results[0]
}

export async function getTopMovies() {
  const {
    data: { results }
  } = await api.get('/movie/top_rated?language=pt-BR-US')

  return results
}

export async function getTopSeries() {
  const {
    data: { results }
  } = await api.get('/tv/top_rated?language=pt-BR-US')

  return results
}

export async function getPopularSeries() {
  const {
    data: { results }
  } = await api.get('/tv/popular?language=pt-BR-US')

  return results
}

export async function getPeoplePopular() {
  const {
    data: { results }
  } = await api.get('/person/popular?language=pt-BR-US')

  return results
}

export async function getMovieVideos(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/videos?language=pt-BR`)

  return results[0]
}

export async function getCredits(movieId) {
  const { data } = await api.get(`/movie/${movieId}/credits?language=pt-BR`)

  return data
}

export async function getMovieSimilar(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/similar?language=pt-BR`)

  return results
}

export async function getMovieById(movieId) {
  const { data } = await api.get(`/movie/${movieId}?language=pt-BR`)

  return data
}

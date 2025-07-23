import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import {
  getPeoplePopular,
  getMovies,
  getTopMovies,
  getTopSeries,
  getPopularSeries
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import {
  Background,
  ContainerMain,
  Title,
  Poster,
  ContainerButtons
} from './styles'

function Home() {
  const [movie, setMovie] = useState([''])
  const [topMovie, setTopMovie] = useState([''])
  const [topSeries, setTopSeries] = useState([''])
  const [popularSeries, setPopularSeries] = useState([''])
  const [popularPeople, setPopularPeople] = useState([''])
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getPeoplePopular()
      ])
        .then(([movie, topMovie, topSeries, popularSeries, popularPeople]) => {
          setMovie(movie)
          setTopMovie(topMovie)
          setTopSeries(topSeries)
          setPopularSeries(popularSeries)
          setPopularPeople(popularPeople)
        })
        .catch((error) => console.error(error))
    }
    getAllData(getMovies)
  }, [])

  return (
    <>
      {movie && (
        <Background $img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <ContainerMain>
            <Title>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>
                  Assita Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Title>
            <Poster>
              <img src={getImages(movie.poster_path)} alt={movie.title} />
            </Poster>
          </ContainerMain>
        </Background>
      )}
      {topMovie && <Slider info={topMovie} title="Filmes mais vistos" />}
      {topSeries && <Slider info={topSeries} title="Series Mais vistas" />}
      {popularSeries && (
        <Slider info={popularSeries} title="Series Mais Populares" />
      )}
      {popularPeople && (
        <Slider info={popularPeople} title="Artitas Mais Populares" />
      )}
    </>
  )
}

export default Home

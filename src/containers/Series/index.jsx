import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import {
  getSeriesMovies,
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

function Series() {
  const [movie, setMovie] = useState([''])
  const [topSeries, setTopSeries] = useState([''])
  const [popularSeries, setPopularSeries] = useState([''])
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {
      Promise.all([getSeriesMovies(), getTopSeries(), getPopularSeries()])
        .then(([movie, topSeries, popularSeries]) => {
          setMovie(movie)
          setTopSeries(topSeries)
          setPopularSeries(popularSeries)
        })
        .catch((error) => console.error(error))
    }
    getAllData(getSeriesMovies)
  }, [])

  return (
    <>
      {movie[3] && (
        <Background $img={getImages(movie[3].backdrop_path)}>
          {showModal && (
            <Modal
              movieId={movie[3].id}
              setShowModal={setShowModal}
              $series={true}
            />
          )}
          <ContainerMain>
            <Title>
              <h1>{movie[3].name}</h1>
              <p>{movie[3].overview}</p>
              <ContainerButtons>
                <Button red onClick={() => navigate(`/detalhe/${movie[3].id}`)}>
                  Assita Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Title>
            <Poster>
              <img src={getImages(movie[3].poster_path)} alt={movie[3].title} />
            </Poster>
          </ContainerMain>
        </Background>
      )}
      {topSeries && <Slider info={topSeries} title="Series Mais vistas" />}
      {popularSeries && (
        <Slider info={popularSeries} title="Series Mais Populares" />
      )}
    </>
  )
}

export default Series

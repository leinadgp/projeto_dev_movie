import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import { getMovies, getTopMovies } from '../../services/getData'
import { getImages } from '../../utils/getImages'
import {
  Background,
  ContainerMain,
  Title,
  Poster,
  ContainerButtons
} from './styles'

function Movies() {
  const [movie, setMovie] = useState([''])
  const [topMovie, setTopMovie] = useState([''])
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {
      Promise.all([getMovies(), getTopMovies()])
        .then(([movie, topMovie]) => {
          setMovie(movie)
          setTopMovie(topMovie)
        })
        .catch((error) => console.error(error))
    }
    getAllData(getMovies)
  }, [])

  return (
    <>
      {movie[0] && (
        <Background $img={getImages(movie[0].backdrop_path)}>
          {showModal && (
            <Modal movieId={movie[0].id} setShowModal={setShowModal} />
          )}
          <ContainerMain>
            <Title>
              <h1>{movie[0].title}</h1>
              <p>{movie[0].overview}</p>
              <ContainerButtons>
                <Button red onClick={() => navigate(`/detalhe/${movie[0].id}`)}>
                  Assita Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Title>
            <Poster>
              <img src={getImages(movie[0].poster_path)} alt={movie[0].title} />
            </Poster>
          </ContainerMain>
        </Background>
      )}
      {movie && <Slider info={movie} title="Filmes mais Populares" />}
      {topMovie && <Slider info={topMovie} title="Filmes mais vistos" />}
    </>
  )
}

export default Movies

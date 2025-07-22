import { useState, useEffect } from 'react'

import { getMovieVideos } from '../../services/getData.js'
import { Container, Background, Icone } from './styles.js'

function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function getMovies() {
      setMovie(await getMovieVideos(movieId))
    }
    if (movieId) getMovies()
  }, [movieId])

  return (
    <Background onClick={() => setShowModal(false)}>
      <Container>
        <Icone onClick={() => setShowModal(false)} />

        {movie && (
          <iframe
            width="80%"
            height="350"
            src={`https://www.youtube.com/embed/${movie.key}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </Container>
    </Background>
  )
}

export default Modal

import { useState, useEffect } from 'react'

import { getMovieVideos, getSeriesVideos } from '../../services/getData.js'
import { Container, Background, Icone } from './styles.js'

function Modal({ movieId, setShowModal, series }) {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      if (series) {
        setMovie(await getSeriesVideos(movieId))
      } else {
        setMovie(await getMovieVideos(movieId))
      }
    }

    fetchData()
  }, [movieId, series])

  return (
    <Background onClick={() => setShowModal(false)}>
      <Container>
        <Icone onClick={() => setShowModal(false)} />

        {movie.length > 0 && movie[0].key && (
          <iframe
            width="80%"
            height="350"
            src={`https://www.youtube.com/embed/${movie[0].key}`}
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

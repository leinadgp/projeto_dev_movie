import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Credits from '../../components/Credits'
import SpanGenres from '../../components/SpanGenres'
import {
  getMovieSimilar,
  getMovieById,
  getCredits,
  getMovieVideos
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Container, Background, Cover, Info, Trailers } from './styles.js'

function Detail() {
  const { id } = useParams()
  const [movieSimiliar, setMovieSimiliar] = useState([''])
  const [movieById, setMovieById] = useState([''])
  const [credits, setCredits] = useState([''])
  const [movieVidos, setMovieVidos] = useState([''])
  console.log(movieVidos)
  console.log(movieSimiliar)

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieSimilar(id),
        getMovieById(id),
        getCredits(id),
        getMovieVideos(id)
      ])
        .then(([movieSimilar, movieById, credits, movieVidos]) => {
          setMovieSimiliar(movieSimilar)
          setMovieById(movieById)
          setCredits(credits)
          setMovieVidos(movieVidos)
        })
        .catch((error) => console.error(error))
    }
    getAllData()
  }, [id])

  return (
    <>
      {movieById && (
        <>
          <Background image={getImages(movieById.backdrop_path)} />
          <Container>
            <Cover>
              <img
                src={getImages(movieById.poster_path)}
                alt={movieById.title}
              />
            </Cover>
            <Info>
              <h2>Filme: {movieById.title}</h2>
              <SpanGenres genres={movieById.genres} />
              <p>{movieById.overview}</p>
              <div>
                <Credits credits={credits} />
              </div>
              <Trailers>
                {movieVidos &&
                  movieVidos.map((video) => (
                    <iframe
                      key={video.id}
                      width="80%"
                      height="350"
                      src={`https://www.youtube.com/embed/${video.key}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ))}
              </Trailers>
            </Info>
          </Container>
        </>
      )}
    </>
  )
}
export default Detail

import { getImages } from '../../utils/getImages' // Adjust the path as needed
import { Container } from './styles.js'

function Card({ item }) {
  return (
    <Container>
      <img src={getImages(item.poster_path || item.profile_path || '')} />
      <h3>{item.name || item.title || ''}</h3>
    </Container>
  )
}
export default Card

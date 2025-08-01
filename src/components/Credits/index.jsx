import { getImages } from '../../utils/getImages.js'
import { Container, Title } from './styles.js'

function Credits({ credits }) {
  return (
    <>
      <Title>Créditoss</Title>
      {credits && (
        <Container>
          {credits.slice(0, 5).map((artist) => (
            <div key={artist.id}>
              <img src={getImages(artist.profile_path)} alt={artist.name} />
              <p>{artist.name}</p>
            </div>
          ))}
        </Container>
      )}
    </>
  )
}
export default Credits

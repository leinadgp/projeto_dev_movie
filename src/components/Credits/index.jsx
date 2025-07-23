import { getImages } from '../../utils/getImages.js'
import { Container, Title } from './styles.js'

function Credits({ credits }) {
  console.log(credits)
  return (
    <>
      <Title>Créditos</Title>
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

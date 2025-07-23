import styled, { keyframes } from 'styled-components'

const scale = keyframes`
    from {
        transform: scale(0);
    }
    to{
        transform: scale(1);
    }
`

export const Background = styled.div`
  background-image: url(${(props) => props.$img});
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  max-width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    height: 110%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
export const ContainerMain = styled.div`
  z-index: 2;
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`
export const Title = styled.div`
  display: flex;
  padding: 20px;
  width: 45%;
  flex-direction: column;
  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 15px;
  }
  p {
    font-size: 0.9rem;
    font-weight: 500;
    color: #fff;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

export const Poster = styled.div`
  width: 30%;
  align-items: center;
  justify-content: center;
  img {
    width: 250px;
    border-radius: 30px;
    animation: ${scale} 0.5s linear;
  }
`
export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 25px;
`

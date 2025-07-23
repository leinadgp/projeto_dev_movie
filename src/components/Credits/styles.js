import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 10px;
  img {
    height: 200px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  p {
    color: #fff;
  }
`
export const Title = styled.h4`
  color: #fff;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 700;
`

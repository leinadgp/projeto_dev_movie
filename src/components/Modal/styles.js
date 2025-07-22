import { AiFillCloseSquare } from 'react-icons/ai'

import styled from 'styled-components'

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`
export const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  max-width: 1200px;
  background-color: #000;

  iframe {
    border: none;
    align-items: center;
    justify-content: center;
  }
`
export const Icone = styled(AiFillCloseSquare)`
  color: red;
  font-size: 24px;
  cursor: pointer;
  position: relative;
  left: 450px;
  bottom: 35px;
`

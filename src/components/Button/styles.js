import styled, { css } from 'styled-components'

const MainButton = css`
  border: 3px solid #fff;
  background: transparent;
  color: #fff;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  &:hover {
    background-color: #fff;
    color: #ff0000;
  }
`
export const ButtonWhite = styled.button`
  ${MainButton}
`
export const ButtonRed = styled.button`
  ${MainButton}
  background-color: #ff0000;
  border: 4px solid transparent;
  box-shadow: 0px 0px 7px 8px rgba(255, 0, 0, 30%);
  color: #fff;
  &:hover {
    background-color: #ff0000;
    box-shadow: 0px 0px 7px 15px rgba(255, 0, 0, 30%);
    color: #fff;
  }
`

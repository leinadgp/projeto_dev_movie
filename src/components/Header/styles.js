import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  min-height: 80px;
  top: 0;
  z-index: 999;
  width: 97vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${(props) =>
    props.$changeBackground ? '#000' : 'transparent'};
  transition: background-color 1s ease-in-out;
  img {
    width: 25%;
  }
`
export const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 50px;
`
export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  font-size: 25px;
  position: relative;
  a {
    color: #fff;
    text-decoration: none;
  }
  &::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.$isActive ? '100%' : '0')};
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.4s ease-in-out;
  }
  &:hover::after {
    width: 100%;
  }
`

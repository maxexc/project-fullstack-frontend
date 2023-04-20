import styled from 'styled-components';
import theme from 'style/generalStyle';
import bgSpinach from '../../images/Header/background-spinach.jpg';

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
  position: fixed;

  background-color: ${props => props.theme.color.header.modalBackground};
  background-image: url(${bgSpinach});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;

  z-index: 150;
  opacity: 1;
  transform: ${props =>
    props.isOpen === false ? 'translateY(-120vh)' : 'translateY(0)'};
  transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1),
    opacity 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const BurgerBtn = styled.button`
  cursor: pointer;
  padding: 0;
  border: none;
  background-color: transparent;
  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s,
    color cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
  color: ${props => props.theme.color.header.burgerBtn};

  &:hover,
  &:focus {
    color: rgb(139, 170, 54);
    transform: scale(1.1);
  }

  @media ${theme.device.desktop} {
    display: none;
  }
`;

export const BackdropMobileMenu = styled.div`
  margin: 0 auto;
  @media ${theme.device.mobail} {
    width: 335px;
    padding: 20px 16px;
  }
  @media ${theme.device.tablet} {
    width: 580px;
    padding: 20px 30px;
  }

  nav {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const CrossIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s,
    color cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;

  &:hover,
  &:focus {
    transform: scale(1.1);
    color: rgb(139, 170, 54);
  }
`;

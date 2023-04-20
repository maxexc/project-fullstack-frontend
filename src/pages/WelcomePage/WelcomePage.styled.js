import styled from 'styled-components';
import theme from '../../style/generalStyle';

import MobileBg from "../../images/Auth/WelcomePageBgMobile.jpg";
import TabletBg from "../../images/Auth/WelcomePageBgTablet.jpg";
import DesktopBg from "../../images/Auth/WelcomePageBgDesktop.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 35px;
  height: 100vh;
  width: calc(100vw - 70px); 

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 28.58%,
      rgba(0, 0, 0, 0.345172) 48.98%,
      rgba(0, 0, 0, 0) 100%
    ), url(${MobileBg});
   
  color: #fff;

  @media ${theme.device.tablet} {
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 28.58%,
      rgba(0, 0, 0, 0.345172) 48.98%,
      rgba(0, 0, 0, 0) 100%
    ), url(${TabletBg});
  }

  /* desktop */
  @media screen and (min-width: 1025px) {
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 28.58%,
      rgba(0, 0, 0, 0.345172) 48.98%,
      rgba(0, 0, 0, 0) 100%
    ), url(${DesktopBg});
  }
`
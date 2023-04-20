import styled from 'styled-components';
import theme from 'style/generalStyle';
import {
  FaFacebook,
  FaYoutubeSquare,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

export const Fb = styled(FaFacebook)`
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const Youtube = styled(FaYoutubeSquare)`
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const Twiter = styled(FaTwitter)`
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const Instagram = styled(FaInstagram)`
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const Follow = styled.div`
  display: none;

  @media ${theme.device.desktop} {
    display: flex;
    padding-top: 100px;
    margin-left: 100px;
    justify-content: start;
    flex-direction: column;
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  width: 163px;
  justify-content: space-around;
  margin-top: 40px;

  @media ${theme.device.desctop} {
    display: flex;
  }

`;

import styled from 'styled-components';
import theme from 'style/generalStyle';

export const PopupWrapper = styled.div`
  background-color: #00000070;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 35;
`;

export const PopupContain = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 330px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  color: ${props => props.theme.color.header.modalText};
  @media ${theme.device.tablet} {
    width: 480px;
    height: 215px;
  }
  @media ${theme.device.desktop} {
    width: 500px;
    height: 215px;
  }

  background-color: ${props => props.theme.color.header.modalBackground};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  div {
    display: flex;
    gap: 8px;

    @media ${theme.device.tablet} {
      gap: 16px;
    }
  }

  img {
    position: absolute;
  }

  p {
    font-family: 'Poppins';
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.02em;

    @media ${theme.device.tablet} {
      font-size: 18px;
      line-height: 24px;
    }
  }
`;

export const CrossBtn = styled.button`
  top: 15px;
  right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  cursor: pointer;
  padding: 0;
  border: none;
  width: 20px;
  height: 20px;
  color: ${props => props.theme.color.header.burgerBtn};
  background-color: transparent;
  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s,
    color cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;

  &:hover,
  &:focus {
    transform: scale(1.05);
    color: #8baa36;
  }

  @media ${theme.device.tablet} {
    top: 20px;
    right: 20px;
    width: 24px;
    height: 24px;
  }
`;

export const LogoutBtn = styled.button`
  font-family: inherit;
  border: none;
  padding: 0;
  cursor: pointer;
  border-radius: 6px;
  font-size: 14px;
  line-height: 18px;
  width: 140px;
  height: 50px;
  color: #fafafa;
  background-color: #8baa36;

  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  @media ${theme.device.tablet} {
    width: 192px;
    height: 60px;
    font-size: 16px;
    line-height: 18px;
  }
`;

export const CancelBtn = styled.button`
  font-family: inherit;
  border: none;
  padding: 0;
  cursor: pointer;
  border-radius: 6px;
  font-size: 14px;
  line-height: 18px;
  width: 140px;
  height: 50px;
  color: #23262a;
  background-color: #d9d9d9;

  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  @media ${theme.device.tablet} {
    width: 192px;
    height: 60px;
    font-size: 16px;
    line-height: 18px;
  }
`;

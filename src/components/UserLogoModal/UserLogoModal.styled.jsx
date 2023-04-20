import styled from 'styled-components';

export const BackdropLogo = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background-color: rgba(89, 89, 89, 0.5);
`;

export const UserLogoPopup = styled.div`
  width: 160px;
  cursor: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 18px;

  background: ${props => props.theme.color.header.modalBackground};
  position: absolute;
  top: 45px;
  right: -60px;
  z-index: 20;
  border: 1px solid ${props => props.theme.color.header.modaBorder};
  border-radius: 8px;

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0;
    border: none;
    background-color: transparent;
    transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s,
      color cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s,
      box-shadow cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
  }

  button:first-child {
    gap: 38px;
    margin-bottom: 28px;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    line-height: 22px;
    color: ${props => props.theme.color.header.modalText};

    &:hover,
    &:focus {
      transform: scale(1.1);
      color: #8baa36;
    }
  }

  button:last-child {
    gap: 6px;
    font-size: 14px;
    padding: 12px 26px;
    border-radius: 24px 44px;
    border: 1px solid #8baa36;
    font-family: Poppins;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    background-color: #8baa36;
    line-height: 21px;

    color: #fafafa;

    &:hover,
    &:focus {
      transform: scale(1.1);
      box-shadow: rgb(139, 170, 54) 1px 1px 5px 0px;
    }
  }
`;

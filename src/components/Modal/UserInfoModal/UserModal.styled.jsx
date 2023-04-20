import styled from 'styled-components';
import theme from 'style/generalStyle';

export const Overlay = styled.form`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
  transform: ${props =>
    props.open === false ? 'translateY(-130vh)' : 'translateY(0)'};
`;

export const UserIModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  position: absolute;
  z-index: 30;
  background-color: ${props => props.theme.color.header.modalBackground};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 24px;

  @media ${theme.device.mobail} {
    height: 330px;
    padding: 32px 24px;
  }

  @media ${theme.device.tablet} {
    height: 300px;
    padding: 50px 40px;
  }

  @media ${theme.device.desktop} {
    padding: 60px 50px;
    height: 300px;
  }

  div {
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d9d9d9;
    border-radius: 50px;
    width: 88px;
    height: 88px;
    margin: 0 auto;
    transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;

    &:hover,
    &:focus {
      transform: scale(1.05);
    }

    @media ${theme.device.tablet} {
      width: 103px;
      height: 103px;
    }

    @media ${theme.device.desktop} {
      width: 103px;
      height: 103px;
    }
  }
`;

export const PenSvg = styled.img`
  position: absolute;
  right: 40px;
  bottom: 122px;

  @media ${theme.device.tablet} {
    height: 20px;
    width: 20px;
    right: 63px;
    bottom: 152px;
  }

  @media ${theme.device.desktop} {
    height: 20px;
    width: 20px;
    right: 70px;
    bottom: 163px;
  }
`;

export const SaveBtn = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;

  &:hover,
  &:focus {
    transform: scale(1.03);
  }

  background: #8baa36;
  border-radius: 6px;

  font-family: 'Poppins';
  font-size: 14px;
  line-height: 18px;

  color: #fafafa;

  @media ${theme.device.tablet} {
    height: 60px;
    font-size: 16px;
    line-height: 18px;
  }

  @media ${theme.device.desktop} {
    height: 60px;
    font-size: 16px;
    line-height: 18px;
  }
`;

export const NameInput = styled.input`
  height: 50px;
  padding: 0;
  padding-left: 40px;
  border: 1px solid #bababc;
  border-radius: 6px;
  margin-bottom: 24px;
  margin-top: auto;

  font-family: 'Poppins';
  font-size: 14px;
  line-height: 21px;

  letter-spacing: -0.02em;

  color: #23262a;

  @media ${theme.device.mobail} {
    min-width: 242px;
  }
  @media ${theme.device.tablet} {
    min-width: 400px;
    height: 60px;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.02em;
    padding-left: 50px;
  }
  @media ${theme.device.desktop} {
    min-width: 400px;
    height: 60px;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.02em;
    padding-left: 50px;
  }
`;

export const CloseCross = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${props => props.theme.color.header.burgerBtn};

  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s,
    color cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;

  &:hover,
  &:focus {
    transform: scale(1.05);
    color: #8baa36;
  }
`;

export const UploadedImg = styled.img`
  cursor: pointer;
  height: 100%;
  object-fit: cover;
`;

export const PlusSvg = styled.img`
  pointer-events: none;
  position: absolute;
  top: 100px;
  right: 130px;

  @media ${theme.device.tablet} {
    top: 130px;
    right: 220px;
  }

  @media ${theme.device.desktop} {
    top: 140px;
    right: 225px;
  }
`;

export const AddImgInput = styled.label`
  cursor: pointer;
  position: absolute;
  border-radius: 50px;
  width: 88px;
  height: 88px;
`;

export const UserSvg = styled.img`
  width: 18px;
  height: 18px;
  position: absolute;
  bottom: 122px;
  left: 38px;

  @media ${theme.device.tablet} {
    width: 24px;
    height: 24px;
    bottom: 152px;
    left: 57px;
  }

  @media ${theme.device.desktop} {
    width: 24px;
    height: 24px;
    bottom: 162px;
    left: 68px;
  }
`;

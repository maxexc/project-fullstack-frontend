import styled from 'styled-components';
import theme from 'style/generalStyle';

export const SwBtn = styled.div`
  padding: 0;
  border: none;
  cursor: pointer;
  position: relative;
  width: 60px;
  height: 30px;
  border-radius: 50px;
  background-color: ${props =>
    props.checked === true ? '#8BAA36' : '#efefef'};
  transition: background-color 0.5s;

  box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);

  @media ${theme.device.mobail} {
    position: fixed;
    bottom: -130px;
    left: -110px;
  }

  @media ${theme.device.tablet} {
    position: fixed;
    bottom: -110px;
    left: -210px;
  }

  @media ${theme.device.desktop} {
    position: relative;
    left: -50px;
    top: 0;
    // transform: translate(-50%, -50%);
  }
`;

export const Circle = styled.div`
  padding: 0;
  position: absolute;
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 2px;
  background-color: white;
  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
  border-radius: 50%;
  background-color: linear-gradient(180deg, #ffffff 0%, #e8eaea 100%);
  transform: ${props =>
    props.checked === true ? 'translateX(26px)' : 'translateX(0)'};
`;

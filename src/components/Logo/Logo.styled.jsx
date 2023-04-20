import styled from 'styled-components';

export const LogoSvg = styled.div`
  display: inline-block;
  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s,
    box-shadow cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;

  border-radius: 30px;

  img {
    overflow: hidden;
  }

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: rgb(139, 170, 54) 0px 0px 15px 0px;
  }
`;

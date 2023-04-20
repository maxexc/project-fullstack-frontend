import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const Main = styled.div`
  position: relative;
  padding: 0 8px;
  margin: 0 auto;
  /* width: 375px; */
  width: 359px;
  @media ${theme.device.tablet} {
    padding: 0 32px;
    width: 704px;
  }

  @media ${theme.device.desktop} {
    width: 1240px;
    background-position: top 52px left 258px, top 74px left 1181px,
      top 152px left 720px;
  }
`;

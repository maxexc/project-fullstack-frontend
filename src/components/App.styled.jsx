import styled from 'styled-components';
import theme from '../style/generalStyle';

export const AppBox = styled.div`
  background-color: #1e1f28;
`;

export const BoxBodyApp = styled.div`
  padding-left: 16px;
  padding-right: 16px;

  @media ${theme.device.tablet} {
    padding: 20px 32px;
  }

  @media ${theme.device.desktop} {
    padding: 14px 100px;
  }
`;

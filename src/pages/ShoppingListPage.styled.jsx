import styled from 'styled-components';
import theme from '../style/generalStyle';

export const TitltList = styled.div`
  background: #8baa36;
  border-radius: 8px;
  padding: 10px;
  color: #fafafa;
`;

export const TitleListProducts = styled.span`
  margin-right: 167px;

  @media ${theme.device.tablet} {
    margin-right: 312px;
  }

  @media ${theme.device.desktop} {
    margin-right: 750px;
  }
`;

export const TitleListNumber = styled.span`
  margin-right: 24px;
`;

import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const ContanerShopingList = styled.div`
  display:inline-block;
  width: 375px;
  padding: 0 8px 50px 8px;
  @media ${theme.device.tablet} {
    width: 768px;
  }
  @media ${theme.device.desktop} {
    width: 1441px;
  } ;
`;

import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const SearchBarWrapper = styled.div`
  padding-bottom: 42px;
  @media ${theme.device.tablet} {
    padding-bottom: 40px;
  }

  @media ${theme.device.desktop} {
    padding-bottom: 90px;
  } ;
`;
export const SearchTypeSelectorBox = styled.div``;

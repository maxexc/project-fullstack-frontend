import styled from 'styled-components';
// eslint-disable-next-line
import theme from '../../style/generalStyle';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  ul {
    padding: 5px 10px;
    box-shadow: 5px 4px 8px 0px rgba(34, 60, 80, 0.2);
    border: 1px solid rgba(34, 60, 80, 0.2);
    border-radius: 30px;
    background: ${props => props.theme.color.favorit.cardWrapper};
  }
  button {
    color: ${props => props.theme.color.favorit.cardTitle};
    &:hover {
      background-color: ${props => props.theme.color.favorit.pagination};
      color: ${props => props.theme.color.favorit.cardWrapper};
    }
  }
  button.Mui-selected {
    background-color: ${props => props.theme.color.favorit.paginationHover};
    &:hover {
      background-color: ${props => props.theme.color.favorit.pagination};
    }
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  img {
    display: block;
  }
`;

export const ImgTitle = styled.p`
  margin-top: 20px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: ${props => props.theme.color.searchPage.SRLNoItemsText};
  opacity: 0.5;
`;

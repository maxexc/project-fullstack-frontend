import styled from 'styled-components';
import theme from '../../style/generalStyle';
//------------------------
export const SearchesForm = styled.form`
  display: flex;
  width: fit-content;
  position: relative;
  margin: ${props => props.page === 'search' && '0px auto 24px'};
  @media screen and (max-width: 768px) {
    //and (max-width: 1303px)
    margin: ${props => props.page === 'main' && '0px auto'};
  }
  @media ${theme.device.tablet} {
    margin: ${props => props.page === 'search' && '0px auto 28px'};
  }
  @media ${theme.device.desktop} {
    margin: ${props => props.page === 'search' && '0px auto 28px'};
  }
`;

export const SearchInput = styled.input`
  outline: none;
  border-radius: 24px 44px;
  border: 1px;
  border-style: solid;
  border-color: ${props => props.theme.color.mainPage.searchInputBorder};
  color: ${props => props.theme.color.mainPage.searchInputColor};
  background-color: ${props => props.theme.color.mainPage.searchInputBG};
  height: 52px;

  width: 283px;
  padding-left: 32px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border-color: ${props => props.theme.color.mainPage.searchInputHover};
  }
  @media ${theme.device.tablet} {
    width: ${props => (props.page === 'main' ? '330px' : '350px')};
    height: 59px;
    font-size: 16px;
    padding-left: ${props => props.page === 'main' && '38px'};
  }
  @media ${theme.device.desktop} {
    width: 465px;
    height: 70px;
  }

  ::placeholder {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: ${props => props.theme.color.mainPage.searchInputPlaceholder};
    @media ${theme.device.tablet} {
      font-size: ${props => (props.page === 'main' ? '16px' : '14px')};
    }
    @media ${theme.device.desktop} {
      font-size: 16px;
    }
  }
`;
export const SearchBtn = styled.button`
  position: absolute;
  right: -1px;
  width: 113px;
  height: 56px;
  color: #fafafa;
  border-radius: 24px 44px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  border-style: solid;
  border: 1px;

  background-color: ${props =>
    props.page === 'main' ? props.theme.color.mainPage.searchBtn : '#8BAA36'};
  border-color: ${props =>
    props.page === 'main' ? props.theme.color.mainPage.searchBtn : '#8BAA36'};

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${props => props.theme.color.mainPage.searchBtncolorFocus};
    background-color: ${props =>
      props.page === 'main'
        ? props.theme.color.mainPage.searchBtnFocus
        : props.theme.color.mainPage.searchBtnFocusSearch};
    border-color: ${props =>
      props.page === 'main'
        ? props.theme.color.mainPage.searchBtnFocus
        : props.theme.color.mainPage.searchBtnFocusSearch};

    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: ${props => props.page === 'main' && '113px'};
  }
  @media ${theme.device.tablet} {
    width: 161px;
    height: 63px;
    font-size: 16px;
  }
  @media ${theme.device.desktop} {
    width: 161px;
    height: 76px;
    font-size: 16px;
  }
`;

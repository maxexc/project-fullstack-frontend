import styled from 'styled-components';
import ReactSelect from 'react-select';

export const CustomSelectBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchTypeSpan = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: ${props => props.theme.color.searchPage.searchTypeSpan};
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
    margin-right: 18px;
  }
  @media screen and (min-width: 1240px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const CustomSelect = styled(ReactSelect)`
  border: 1px;
  border-style: solid;
  border-color: rgba(250, 250, 250, 0.2);
  border-radius: 6px;

  .react-select__value-container .react-select__input {
    cursor: none;
    /* pointer-events: none; */
  }
  .react-select__value-container .react-select__single-value {
    color: ${props =>
      props.theme.color.searchPage.customSelectColor} !important;
  }
  .react-select__control {
    caret-color: transparent;
    border: none;
    background-color: ${props =>
      props.theme.color.searchPage.customSelectBG}; // #ececec;
    height: 34px;
    width: 146px;

    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    font-family: Poppins;
    color: ${props => props.theme.color.searchPage.customSelectColor};
    @media screen and (min-width: 768px) {
      font-size: 14px;
      height: 41px;
      width: 175px;
    }
    @media screen and (min-width: 768px) {
      font-size: 14px;
      height: 49px;
      width: 198px;
    }

    &:active,
    &:hover,
    &:focus {
      outline: 0;
      border: 0;
      box-shadow: none;
      caret-color: transparent;
    }
  }

  .css-t3ipsp-control:hover {
    outline: 0;
    border: 0;
    box-shadow: 0;
  }

  .css-t3ipsp-control {
    outline: 0;
    border: 0;
    box-shadow: none;
  }

  .react-select-container {
    outline: 0;
    border: 0;
  }

  .react-select__control--is-focused {
    outline: 0;
    border: 0;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__dropdown-indicator {
    color: #8baa36;
  }

  .react-select__dropdown-indicator:hover,
  .react-select__dropdown-indicator:focus,
  .react-select__dropdown-indicator:active {
    color: #8baa36; //!important
  }
  .react-select__menu {
    margin-top: 0px;
    margin-bottom: 0px;
    border-radius: 0px 0px 6px 6px;
    max-height: 96px;
    width: 146px;
    background-color: ${props =>
      props.theme.color.searchPage.reactSelectMenuList};
    outline: 0;
    border: 0;

    box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
    @media screen and (min-width: 768px) {
      width: 175px;
    }
    @media screen and (min-width: 768px) {
      width: 198px;
    }
  }
  /* .react-select__menu-list {
    border-radius: 0px 0px 6px 6px;
  } */

  .react-select__menu-list:hover {
    outline: 0;
    border: 0;
  }

  .react-select__option {
    cursor: pointer;
    color: ${props => props.theme.color.searchPage.reactSelectOptionColor};
    background-color: transparent;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.02em;
    font-family: Poppins;
  }

  .react-select__option:hover,
  .react-select__option:focus {
    color: ${props => props.theme.color.searchPage.reactSelectOptionHover};
  }
`;

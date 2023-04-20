import styled from 'styled-components';
import theme from 'style/generalStyle';
import down from '../../images/AddRecipiePage/chevron-down.svg';
import ReactSelect from 'react-select';

export const CustomSelectUnit = styled(ReactSelect)`
  .react-select__single-value {
    color: ${props => props.theme.color.addResipe.inputColor};
  }

  .react-select__placeholder {
    color: ${props => props.theme.color.addResipe.ingredientsSelested};
  }

  .react-select__value-container {
    padding: 0;
    ::placeholder {
      opacity: 1;
      color: ${props => props.theme.color.addResipe.inputColor};
    }
  }

  .react-select__control {
    background-color: ${props =>
      props.theme.color.addResipe.ingridientsBackground};
    height: 59px;
    width: 68px;
    border-radius: 0px 6px 6px 0px;
    background-image: url(${down});
    background-repeat: no-repeat;
    background-position: 70%;
    font-size: 18px;
    line-height: 27px;
    font-family: Poppins;
    border: ${props => props.theme.color.addResipe.ingredientsBorder};
    border-style: solid;
    border-width: 1px 1px 1px 0;
    :hover {
      outline: 0;
      border-color: ${props => props.theme.color.addResipe.ingredientsBorder};
    }
  }

  .react-select__control--is-focused {
    outline: 0;
    box-shadow: none;
  }

  .react-select__indicators {
    display: none;
  }

  .react-select__menu-list {
    background-color: ${props => props.theme.color.addResipe.optionMenuColor};
    color: ${props => props.theme.color.addResipe.titleColor};
    max-height: 185px;
    width: 99px;
    border-radius: 6px;
  }

  .react-select-listbox {
    background-color: ${props => props.theme.color.addResipe.optionMenuColor};
    color: ${props => props.theme.color.addResipe.titleColor};
    max-height: 185px;
    width: 99px;
    border-radius: 6px;
  }

  .react-select__menu {
    outline: 0;
    border: 0;
    width: 99px;
    margin-top: 0;
    margin-left: -31px;
    box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
    :hover {
      outline: 0;
      border: 0;
    }
  }

  .react-select__option {
    color: ${props => props.theme.color.addResipe.titleColor};
    background-color: transparent;
    opacity: 0.5;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    letter-spasing: -0.02em;
    font-family: Poppins;
    :hover {
      color: ${props => props.theme.color.addResipe.optionSelectHover};
      background-color: transparent;
      opacity: ${props => props.theme.color.addResipe.ingridientsOpasity};
    }
  }
`;

export const CustomSelect = styled(ReactSelect)`
  .react-select__input-container {
    color: ${props => props.theme.color.addResipe.ingridientsInputColor};
  }

  .react-select__single-value {
    color: ${props => props.theme.color.addResipe.inputColor};
  }

  .react-select__placeholder {
    color: ${props => props.theme.color.addResipe.ingredientsSelested};
  }

  .react-select__control {
    background-color: ${props =>
      props.theme.color.addResipe.ingridientsBackground};
    height: 59px;
    width: 194px;
    border-radius: 6px;
    margin-right: 16px;
    padding-left: 18px;
    background-image: url(${down});
    background-repeat: no-repeat;
    background-position: 95%;
    font-size: 18px;
    line-height: 27px;
    font-family: Poppins;
    border: 1px solid ${props => props.theme.color.addResipe.ingredientsBorder};
    @media ${theme.device.tablet} {
      width: 398px;
    }
    :hover {
      outline: 0;
      border-color: ${props => props.theme.color.addResipe.ingredientsBorder};
    }
  }

  .react-select__control--is-focused {
    outline: 0;
    box-shadow: none;
  }

  .react-select__indicators {
    display: none;
  }

  .react-select__menu-list {
    max-height: 185px;
    color: ${props => props.theme.color.addResipe.titleColor};
    width: 198px;
    border-radius: 6px;
    background-color: ${props => props.theme.color.addResipe.optionMenuColor};
    @media ${theme.device.desktop} {
      width: 398px;
    }
  }

  .react-select__menu:hover {
    outline: 0;
    border: 0;
  }

  .react-select__menu {
    outline: 0;
    border: 0;
    width: 198px;
    box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
    @media ${theme.device.desktop} {
      width: 398px;
      margin: 0;
      padding: 0;
    }
  }

  .react-select__option {
    color: ${props => props.theme.color.addResipe.titleColor};
    background-color: transparent;
    opacity: 0.5;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    letter-spasing: -0.02em;
    font-family: Poppins;
    :hover {
      color: ${props => props.theme.color.addResipe.optionSelectHover};
      background-color: transparent;
      opacity: ${props => props.theme.color.addResipe.ingridientsOpasity};
    }
  }

`;

export const Ingridients = styled.div`
  @media ${theme.device.desktop} {
    width: 609px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  margin-top: 100px;
  margin-bottom: 4px;
`;

export const Simbol = styled.button`
  background-color: transparent;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  height: 16px;
  width: 16px;
  border: 0;
  stroke: ${props => props.theme.color.addResipe.simbolColor};
  padding: 0;
   {
    :hover {
      stroke: #8baa36;
      fill: #8baa36;
      stroke-opacity: 1;
      cursor: pointer;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  font-size: 24px;
  justify-content: space-between;
  font-weight: 600;
  color: ${props => props.theme.color.addResipe.titleColor};
`;

export const Counter = styled.div`
  display: flex;
  border: 1px solid ${props => props.theme.color.addResipe.ingridientsCounter};
  width: 110px;
  height: 32px;
  border-radius: 18px;
  justify-content: space-around;
  align-items: center;
  color: ${props => props.theme.color.addResipe.ingridientsCounter};
`;

export const IngridientsList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

export const IngridientField = styled.li`
  display: flex;
  list-style: none;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  justify-content: space-between;
`;

export const Quantity = styled.div`
  flex-wrap: nowrap;
  display: flex;
`;

export const InputQuantity = styled.input`
  display: flex;
  list-style: none;
  color: ${props => props.theme.color.addResipe.inputColor};
  background-color: ${props =>
    props.theme.color.addResipe.ingridientsBackground};
  border: ${props => props.theme.color.addResipe.ingredientsBorder};
  border-radius: 6px 0px 0px 6px;
  border-style: solid;
  border-width: 1px 0 1px 1px;
  padding-left: 14px;
  width: 36px;
  height: 57px;
  padding-top: 0;
  padding-bottom: 0;
  font-size: 18px;
  line-height: 27px;
  font-family: Poppins;
   {
    :focus-visible {
      border-radius: 6px 0px 0px 6px;
      border-style: solid;
      border-width: 1px 0 1px 1px;
      outline: none;
      box-shadow: none;
    }
  }
`;

export const Delete = styled.button`
  background-color: transparent;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  height: 59px;
  width: 51px;
  border: 0;
  stroke: ${props => props.theme.color.addResipe.simbolColor};
  padding: 0;
  display: flex;
  justify-content: end;
  align-items: center;
   {
    :hover {
      stroke: #8baa36;
      stroke-opacity: 1;
      cursor: pointer;
    }
  }
`;

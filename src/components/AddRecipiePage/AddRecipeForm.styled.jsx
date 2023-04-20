import styled from 'styled-components';
import theme from 'style/generalStyle';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-size: 28px;
  margin-top: 50px;
`;

export const Form = styled.form`
  display: flex;
  padding-top: 40px;
  flex-direction: column;
  @media ${theme.device.desktop} {
    padding-top: 100px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.div`
  background-color: ${props => props.theme.color.addResipe.addButton};
  color: rgb(255, 255, 255);
  border-radius: 24px 44px;
  height: 52px;
  width: 161px;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 72px;
  cursor: pointer;
  @media ${theme.device.desktop} {
    margin-bottom: 200px;
  }
  &:hover,
  &:focus {
    color: ${props => props.theme.color.mainPage.searchBtncolorFocus};
    background-color: ${props =>
      props.page === 'main'
        ? props.theme.color.mainPage.searchBtnFocus
        : props.theme.color.mainPage.searchBtnFocus};
    border-color: ${props =>
      props.page === 'main'
        ? props.theme.color.mainPage.searchBtnFocus
        : props.theme.color.mainPage.searchBtnFocus};
    cursor: pointer;
  }
`;

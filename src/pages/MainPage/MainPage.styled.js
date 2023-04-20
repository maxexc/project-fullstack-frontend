import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const ContainerWrapper = styled.div`
  @media ${theme.device.tablet} {
  }
  @media ${theme.device.desktop} {
  }
`;

export const Section = styled.section`
  padding-top: 50px;
  padding-bottom: 100px;
  @media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 100px;
  }
  @media ${theme.device.desktop} {
    padding-top: 100px;
    padding-bottom: 118px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-bottom: 40px;
  @media ${theme.device.tablet} {
    gap: 50px;
    margin-bottom: 32px;
  }
  @media ${theme.device.desktop} {
    gap: 100px;
    margin-bottom: 14px;
  }
`;

export const GridContainer = styled.div`
  justify-content: center;
  @media ${theme.device.tablet} {
    display: flex;
    flex-wrap: wrap; //just for case
    gap: 32px;
  }
  @media ${theme.device.desktop} {
    display: flex;
    gap: 13px;
  }
`;

export const RecipeCategoryName = styled.h2`
  margin-bottom: 32px;
`;

export const RecipeCategoryNameLink = styled(Link)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  text-decoration: none;
  letter-spacing: -0.02em;

  color: ${props => props.theme.color.mainPage.recipeCategoryName};

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #8baa36;
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  margin-bottom: 24px;
  img {
    width: 100%;
    border-radius: 8px;
  }
  > a {
    text-decoration: none;
  }
`;
export const RecipeTitleWrapper = styled.div`
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 26px;
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
`;
export const RecipeTitle = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;

  letter-spacing: -0.24px;

  color: #3e4462;
`;
export const Button = styled.button`
  display: flex;
  width: 94px;
  height: 38px;

  background: #8aa936;
  border-radius: 6px;
  border-color: transparent;
  justify-content: center;
  align-items: center;
  /* padding: 10px 24px; */
  color: #fafafa;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  margin-left: auto;
  margin-top: 24px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    cursor: pointer;
    color: #22252a;
  }
  @media ${theme.device.tablet} {
    margin-top: 40px;
  }

  @media ${theme.device.desktop} {
    margin-top: 60px;
  }
`;

export const MPButton = styled.button`
  display: block;
  width: 195px;
  height: 46px;
  /* border-color: transparent; */
  border-radius: 24px 44px;
  border: 2px solid #8baa36;
  background-color: transparent;
  margin: 0 auto;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  color: ${props => props.theme.color.mainPage.mpButton};

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #8baa36;
    cursor: pointer;
    outline: none;
    color: #fafafa;
  }

  @media ${theme.device.tablet} {
    width: 239px;
    height: 61px;
    font-size: 16px;
  }

  &:hover,
  focus {
    background-color: #8baa36;
    color: #fafafa;
  }
`;

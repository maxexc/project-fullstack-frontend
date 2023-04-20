import styled from 'styled-components';
import theme from 'style/generalStyle';

export const BtnWrapper = styled.div`
  position: relative;
  @media (min-width: 320px) {
    // margin-left: auto;
    // margin-right: 10px;
  }
  // @media ${theme.device.mobail} {
  //   margin-left: auto;
  //   margin-right: 55px;
  // }
  // @media ${theme.device.tablet} {
  //   margin-left: auto;
  //   margin-right: 55px;
  // }
  // @media ${theme.device.desktop} {
  //   // margin-left: 230px;
  //   // margin-right: 55px;
  // }
`;

export const UserLogoBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: flex;
  padding: 3px;
  border-radius: 50px;
  align-items: center;
  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s,
    box-shadow cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 1px 1px 5px 0px rgb(139, 170, 54);
  }

  p {
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 12px;
    line-height: 170%;
    color: #22252a;
  }
`;

export const ImgAva = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-right: 14px;
`;

export const NameUser = styled.span`
  transition: color cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
  color: ${props => props.theme.color.header.textNavigation};
  ${props => {
    const { scroll, locate, theme } = props;
    if (locate === 1 || locate === 2) {
      return scroll < 80
        ? `color: ${theme.color.header.pageRecipe};`
        : `color: ${theme.color.header.pageRecipeScroll};`;
    }
  }};
`;

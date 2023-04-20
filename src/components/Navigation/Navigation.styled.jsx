import { AiOutlineSearch } from 'react-icons/ai';
import styled from 'styled-components';
import theme from 'style/generalStyle';

export const HeaderNav = styled.nav`
  @media (min-width: 320px) {
    display: none;
  }
  @media ${theme.device.mobail} {
    display: none;
  }
  @media ${theme.device.tablet} {
    display: none;
  }
  @media ${theme.device.desktop} {
    // margin-left: auto;
    display: flex;
    flex-direction: row;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media ${theme.device.mobail} {
    font-size: 18px;
    line-height: 18px;

    letter-spacing: -0.02em;
  }

  @media ${theme.device.tablet} {
    font-size: 24px;
    line-height: 24px;

    letter-spacing: -0.02em;
  }

  @media ${theme.device.desktop} {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
  }

  & li a {
    color: ${props => props.theme.color.header.textNavigation};
    ${props => {
      const { scroll, locate, theme } = props;
      if (locate === 1) {
        return scroll < 80
          ? `color: ${theme.color.header.pageRecipe};`
          : `color: ${theme.color.header.pageRecipeScroll};`;
      }
    }};

    &.active {
      color: #8baa36;
    }
    transition: color cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
  }

  li a:hover,
  li a:focus {
    color: #8baa36;
  }

  li a {
  }

  li:last-child a {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  @media ${theme.device.desktop} {
    flex-direction: row;
    gap: 30px;

    li:last-child p {
      display: none;
    }
  }
`;

// ${props =>
//       (props.color === 'dark') & (props.scroll > 80) & (props.locate === 1)
//         ? props.theme.color.header.textNavigation
//         : props.theme.color.header.headerDark};

export const SearchImg = styled(AiOutlineSearch)``;

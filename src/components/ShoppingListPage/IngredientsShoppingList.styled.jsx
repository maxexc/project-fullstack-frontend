import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const List = styled.ul`
  list-style: none;
  padding-bottom: 100px;
  @media ${theme.device.tablet} {
    padding-bottom: 200px;
  }

  @media ${theme.device.desktop} {
    padding-bottom: 195px;
  }
`;
export const Item = styled.li`
  padding: 0 8px;
  max-width: 100%;

  @media ${theme.device.tablet} {
    max-width: 704px;
  }

  @media ${theme.device.desktop} {
    padding: 0 41px;
    max-width: 1160px;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  padding-top: 50px;
  padding-bottom: 50px;
  border-bottom: 1px solid
    ${props => props.theme.color.shoppingList.borderItemContainer};
  padding-right: 15px;

  @media ${theme.device.tablet} {
    padding-right: 32px;
  }

  @media ${theme.device.desktop} {
    padding-right: 32px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 6px;
  background: ${props => props.theme.color.shoppingList.colorImageContainer};
  padding: 6px;
  margin-right: 10px;
  @media ${theme.device.tablet} {
    width: 93px;
    height: 97px;
    margin-right: 16px;
  }
`;

export const TitleProduct = styled.div`
  // position: absolute;
  // left: 96px;

  width: 100px;
  font-family: 'Poppins';
  font-size: 10px;
  line-height: 12px;
  color: ${props => props.theme.color.shoppingList.titleProduct};
  margin-right: auto;

  @media ${theme.device.tablet} {
    left: 148px;
    width: 200px;
    font-size: 16px;
    line-height: 24px;
  }
  @media ${theme.device.desktop} {
    left: 249px;
  } ;
`;

export const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins';
  font-size: 10px;
  line-height: 15px;
  min-width: 37px;
  height: 20px;
  border-radius: 4px;
  background: #8baa36;
  color: #fafafa;
  margin-right: 49px;
  padding: 6px;

  @media ${theme.device.tablet} {
    min-width: 68px;
    height: 35px;
    font-size: 18px;
    line-height: 27px;
    margin-right: 115px;
    padding: 8px;
  }
  @media ${theme.device.desktop} {
    margin-right: 142px;
  } ;
`;

export const Remove = styled.button`
  display: flex;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

export const RemoveSvg = styled.div`
  svg {
    stroke: ${props => props.theme.color.shoppingList.titleProduct};
    width: 8px;
    height: 8px;

    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media ${theme.device.tablet} {
      width: 12px;
      height: 12px;
    }

    @media ${theme.device.desktop} {
      width: 20px;
      height: 20px;
    }

    &:hover {
      stroke: #8baa36;
    }
  }
`;

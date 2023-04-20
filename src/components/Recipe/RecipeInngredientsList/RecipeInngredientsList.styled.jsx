import styled from 'styled-components';
import theme from '../../../style/generalStyle';

export const InngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 50px;
  @media ${theme.device.tablet} {
    gap: 24px;
    margin-bottom: 96px;
  }
  @media ${theme.device.desktop} {
    margin-bottom: 100px;
  }
`;

export const RecipeItem = styled.li`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: ${props =>
    props.theme.color.recipePage.backgrounRecipeItem};
  list-style: none;
  padding: 0 8px;
  max-width: 100%;
  @media ${theme.device.tablet} {
    max-width: 704px;
  }

  @media ${theme.device.desktop} {
    max-width: 1240px;
  }
`;

export const InngredientContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 6px;
  padding: 6px;
  margin-right: 10px;
  @media ${theme.device.tablet} {
    width: 128px;
    height: 128px;
    margin-right: 24px;
    margin-left: 24px;
  }
  @media ${theme.device.desktop} {
    margin-right: 40px;
    margin-left: 32px;
  }
`;

export const IngName = styled.div`
  display: block;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  color: ${props => props.theme.color.recipePage.ingName};
  width: 117px;
  @media ${theme.device.tablet} {
    width: 217px;
    font-size: 15px;
  }
  @media ${theme.device.desktop} {
    width: 665px;
    font-size: 24px;
  }
`;

export const IngDescr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins';
  font-size: 12px;
  width: 60px;
  line-height: 15px;
  border-radius: 4px;
  background: #8baa36;
  color: #fafafa;

  padding: 4px 8px;
  @media ${theme.device.tablet} {
    padding: 4px 8px;
    width: 125px;
    font-size: 15px;
  }
  @media ${theme.device.desktop} {
    padding: 8px 8px;
    font-size: 17px;
  } ;
`;

export const RealCheckbox = styled.input`
  display: none;
`;

export const CustomCheckbox = styled.div`
  margin-left: 30px;
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  background: transparent;
  border: 1px solid rgba(126, 126, 126, 0.5);
  border-radius: 4px;
  & svg {
    width: 9px;
    height: 9px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  @media ${theme.device.tablet} {
    border: 2px solid rgba(126, 126, 126, 0.5);
    margin-left: 60px;
    width: 18px;
    height: 18px;
  }
  @media ${theme.device.desktop} {
    width: 20px;
    height: 20px;
    margin-left: 120px;
  }
`;

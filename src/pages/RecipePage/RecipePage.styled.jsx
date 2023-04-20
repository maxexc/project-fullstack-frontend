import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const ContanerRecipeList = styled.div`
 display:inline-block
 text-align; center; 
  width: 375px;
  padding: 0 8px 50px 8px;
  @media ${theme.device.tablet} {
    width: 768px;
  }
  @media ${theme.device.desktop} {
    width: 1441px;
  } ;
`;

export const TitltListWrap = styled.div`
  display: flex;
  width: 340px;
  background: #8baa36;
  border-radius: 8px;
  padding: 10px;
  color: #fafafa;
  font-family: 'Poppins';
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 24px;

  @media ${theme.device.tablet} {
    width: 665px;
    font-size: 18px;
    line-height: 27px;
    padding: 20px;
    margin-bottom: 32px;
  }
  @media ${theme.device.desktop} {
    width: 1160px;
    padding: 21px 40px;
    margin-bottom: 50px;
  } ;
`;

export const TitleListIngredient = styled.span`
  margin-right: auto;
`;

export const TitleListNumber = styled.span`
  margin-right: 22px;

  @media ${theme.device.tablet} {
    margin-right: 56px;
  }

  @media ${theme.device.desktop} {
    margin-right: 118px;
  }
`;
export const AddtoList = styled.span`
  @media ${theme.device.tablet} {
    margin-right: 24px;
  }
  @media ${theme.device.desktop} {
    margin-right: 3px;
  }
`;

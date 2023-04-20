import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const TitltList = styled.div`
  display: flex;
  max-width: 357px;
  background: #8baa36;
  border-radius: 8px;
  padding: 10px;
  color: #fafafa;
  font-family: 'Poppins';
  font-size: 12px;
  line-height: 18px;

  @media ${theme.device.tablet} {
    max-width: 734px;
    font-size: 18px;
    line-height: 27px;
    padding: 20px;
  }
  @media ${theme.device.desktop} {
    max-width: 1240px;
    padding: 21px 40px;
  } ;
`;

export const TitleListProducts = styled.span`
  margin-right: auto;
`;

export const TitleListNumber = styled.span`
  margin-right: 24px;

  @media ${theme.device.tablet} {
    margin-right: 78px;
  }

  @media ${theme.device.desktop} {
    margin-right: 124px;
  }
`;

export const ImgIngradientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 50px 0 50px 0;
  @media ${theme.device.tablet} {
    padding-bottom: 50px;
  }
`;

export const ImgIngradients = styled.img`
  margin: auto;
  width: 208px;
  margin-bottom: 24px;

  @media ${theme.device.tablet} {
    width: 350px;
    margin-bottom: 32px;
  }
`;

export const ImgIngradientsText = styled.div`
  margin: auto;
  font-size: 14px;
  line-height: 14px;
  color: ${props => props.theme.color.shoppingList.ImgIngradientsText};
  opacity: 0.5;

  @media ${theme.device.tablet} {
    font-size: 24px;
    line-height: 24px;
  }
`;

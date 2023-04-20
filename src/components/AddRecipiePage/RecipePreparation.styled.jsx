import styled from 'styled-components';
import theme from 'style/generalStyle';


export const Title = styled.div`
  display: flex;
  font-size: 24px;
  justify-content: space-between;
  font-weight: 600;
  margin-top: 100px;
  color: ${props => props.theme.color.addResipe.titleColor};
`;

export const Textarea = styled.textarea`
  padding: 20px;
  height: 224px;
  width: 100%;
  color:  ${props => props.theme.color.addResipe.ingredientsSelested};
  background-color: ${props => props.theme.color.addResipe.ingridientsBackground};
  border: 1px solid;
  border-color:  ${props => props.theme.color.addResipe.ingredientsBorder};
  border-radius: 6px;
  margin-top: 32px;
  box-sizing: border-box;
  resize: none;
  font-size: 18px;
  font-family: Poppins;
  font-weight: 400;
  ::placeholder {
    font-size: 18px;
    font-family: Poppins;
    font-weight: 400;
    color: ${props => props.theme.color.addResipe.ingredientsSelested};
  }
  @media ${theme.device.desktop} {
      width: 609px;
    }
`;

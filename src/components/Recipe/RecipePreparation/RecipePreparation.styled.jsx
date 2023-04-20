import styled from 'styled-components';
import theme from '../../../style/generalStyle';

export const PreparationWrapper = styled.div`
  margin-bottom: 200px;
  @media ${theme.device.tablet} {
    margin-bottom: 200px;
  }
  @media ${theme.device.desktop} {
    margin-bottom: 200px;
    display: flex;
    justify-content: space-between;
  }
`;

export const InstructionTitle = styled.h2`
  margin-bottom: 28px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${props => props.theme.color.recipePage.instructionTitle};
  @media ${theme.device.tablet} {
    margin-bottom: 32px;
  }
`;

export const InstructionWrapper = styled.div`
  overflow: hidden visible;
  ::-webkit-scrollbar {
    background: #8baa36;
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${props =>
      props.theme.color.recipePage.instructionScrollbarThumb};
  }
  width: 343px;
  height: 290px;

  @media ${theme.device.tablet} {
    width: 704px;
    height: 302px;
  }
  @media ${theme.device.desktop} {
    width: 757px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  :not(:first-child) {
    margin-top: 14px;
  }
`;

export const SpanBox = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: white;
  min-width: 25px;
  min-height: 25px;
  max-height: 25px;
  border-radius: 50%;
  background: #8baa36;
  margin-right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Span = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
`;
export const Text = styled.p`
  color: ${props => props.theme.color.recipePage.instructionText};
`;

export const InstructionList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  gap: 14px;
  @media ${theme.device.tablet} {
    gap: 18px;
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  margin-right: 0;
  margin-top: 40px;
  width: 343px;
  height: 250px;
  @media ${theme.device.tablet} {
    margin-top: 50px;
    width: 433px;
    height: 332px;
  }

  @media ${theme.device.desktop} {
    margin-top: 0px;
    margin-left: 325px;
  }
  width: 343px;
  height: 250px;

  & img {
    border-radius: 8px;
  }
`;

import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 14px 9px;
  margin-bottom: 14px;
  border-radius: 8px;
  box-shadow: 5px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border: 1px solid rgba(34, 60, 80, 0.2);
  background: ${props => props.theme.color.favorit.cardWrapper};

  @media ${theme.device.tablet} {
    position: relative;
    display: flex;
    padding: 28px 24px;
    margin-bottom: 8px;
  }

  @media ${theme.device.desktop} {
    position: relative;
    padding: 40px;
    margin-bottom: 50px;
  }
`;

export const CardImg = styled.img`
  display: block;
  width: 124px;
  height: 124px;
  border-radius: 8px;

  @media ${theme.device.tablet} {
    display: block;
    width: 228px;
    height: 232px;
    border-radius: 8px;
  }

  @media ${theme.device.desktop} {
    display: block;
    width: 318px;
    height: 324px;
  }
`;

export const CardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  height: 124px;
  margin-left: 14px;

  @media ${theme.device.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 232px;
  }

  @media ${theme.device.desktop} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 324px;
    margin-left: 50px;
  }
`;

export const CardTitle = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.24px;
  color: ${props => props.theme.color.favorit.cardTitle};

  @media ${theme.device.tablet} {
    font-size: 24px;
    line-height: 24px;
  }

  @media ${theme.device.desktop} {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const CardDescription = styled.p`
  display: inline-block;
  max-height: 50px;
  width: 163px;
  padding: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: ${props => props.theme.color.favorit.cardDescription};

  @media ${theme.device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-height: 110px;
    width: 404px;
    gap: 14px;
    font-size: 14px;
    line-height: 18px;
  }

  @media ${theme.device.desktop} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 800px;
    height: 140px;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const CardTime = styled.p`
  display: inline-block;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.24px;
  color: ${props => props.theme.color.favorit.cardTime};

  @media ${theme.device.tablet} {
    display: inline-block;
    font-size: 14px;
    line-height: 20px;
  }

  @media ${theme.device.desktop} {
    display: inline-block;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const CardButtonSee = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 87px;
  height: 27px;
  right: 9px;
  bottom: 14px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  cursor: pointer;
  color: #fafafa;
  background: #8baa36;
  border-radius: 24px 44px;
  border: 1px solid rgb(250, 250, 250);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: ${props => props.theme.color.favorit.cardButtonSeeHover};
  }

  @media ${theme.device.tablet} {
    position: absolute;
    width: 138px;
    height: 45px;
    right: 24px;
    bottom: 28px;
    font-size: 14px;
    line-height: 21px;
    &:hover {
      background: #22252a;
    }
  }

  @media ${theme.device.desktop} {
    position: absolute;
    width: 172px;
    height: 54px;
    right: 40px;
    bottom: 40px;
    padding: 18px 40px;
    font-size: 16px;
    line-height: 24px;
    &:hover {
      background: #22252a;
    }
  }
`;

export const CardButtonDelete = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 9px;
  top: 14px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fafafa;
  background: #8baa36;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #22252a;
  }

  @media ${theme.device.tablet} {
    position: absolute;
    width: 38px;
    height: 38px;
    right: 24px;
    top: 28px;
    &:hover {
      background: #22252a;
    }
  }

  @media ${theme.device.desktop} {
    position: absolute;
    width: 44px;
    height: 44px;
    right: 40px;
    top: 40px;
    &:hover {
      background: #22252a;
    }
  }
`;

export const CardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  fill: #8baa36;
  stroke: #ebf3d4;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    fill: #22252a;
    stroke: #fafafa;
  }
  svg {
    width: 10px;
    height: 11px;
  }

  @media ${theme.device.tablet} {
    width: 38px;
    height: 38px;
  }
  svg {
    width: 16px;
    height: 18px;
  }

  @media ${theme.device.desktop} {
    width: 44px;
    height: 44px;
    svg {
      width: 18px;
      height: 20px;
    }
  }
`;

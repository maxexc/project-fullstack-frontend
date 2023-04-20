import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const HeroContainer = styled.div`
    text-align: center;
    margin-bottom: 44px;
    width: 305px;

    @media ${theme.device.tablet} {
        margin-bottom: 40px;
        width: 505px;
    }

    @media ${theme.device.desktop} {
        width: 544px;
    }
`

export const WelcomeLogo = styled.div`
  display: inline-block;
  margin-bottom: 28px;

  width: 54px;
  height: 54px;

  @media ${theme.device.tablet} {
    margin-bottom: 44px;

    width: 68px;
    height: 68px;
  }
`;

export const WelcomeTitle = styled.h1`
    margin-bottom: 14px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.02em;

    color: #FAFAFA;

    @media ${theme.device.tablet} {
        font-size: 28px;
    }
`

export const Description = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;

    color: #FAFAFA;

    @media ${theme.device.tablet} {
        font-size: 18px;
        line-height: 1.33;
    }
`
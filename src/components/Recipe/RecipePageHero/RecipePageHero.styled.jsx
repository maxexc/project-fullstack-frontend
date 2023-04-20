import styled from 'styled-components';
import theme from '../../../style/generalStyle';

import mob1 from '../../../images/RecipeHero/recipeHero_mob_1x.jpg';
import mob2 from '../../../images/RecipeHero/recipeHero_mob_2x.jpg';
import tab1 from '../../../images/RecipeHero/recipeHero_tab_1x.jpg';
import tab2 from '../../../images/RecipeHero/recipeHero_tab_2x.jpg';
import desktop1 from '../../../images/RecipeHero/recipeHero_desktop_1x.jpg';
import desktop2 from '../../../images/RecipeHero/recipeHero_desktop_2x.jpg';

export const HeroContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;
  background-image: url(${mob1});
  height: 375px;
  margin-bottom: 32px;
  padding-top: 144px;
  background-size: contain;
  background-color: transparent;
  background-position: center;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${mob2});
  }

  @media ${theme.device.tablet} {
    background-image: url(${tab1});
    padding-bottom: 90px;
    padding: 80px 44px;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${tab2});
    }
  }
  @media screen and (min-width: 1240px) {
    height: 350px;
    padding-top: 100px;
    padding-bottom: 50px;
    margin-bottom: 50px;
    background-image: url(${desktop1});

    media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${desktop2});
    }
  }
`;

export const HeroTiile = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  display: block;
  text-align: center;
  font-size: 24px;
  line-height: 1.3;
  color: #8baa36;

  max-width: 330px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow-y: clip;

  @media ${theme.device.tablet} {
    max-width: 680px;
    font-size: 44px;
  }

  @media ${theme.device.desktop} {
    max-width: 1000px;
  }
`;

export const HeroText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.2;
  text-align: center;
  letter-spacing: -0.02em;

  width: 303px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow-y: clip;
  hyphens: auto;

  @media ${theme.device.tablet} {
    width: 506px;
    font-size: 18px;
    line-height: 1.33;
  }

  @media ${theme.device.desktop} {
    -webkit-line-clamp: 3;
    width: 656px;
  }
`;

export const HeroButtonAdd = styled.button`
  padding: 10px 18px;
  background-color: transparent;
  color: #22252a;
  margin-bottom: 0px;
  border-radius: 24px 44px;
  border: 1px solid #8baa36;
  transition: all 250ms linear;
  font-size: 10px;
  line-height: 1.5;
  @media ${theme.device.tablet};
   {
    padding: 18px 44px;
    font-size: 16px;
  }
  @media ${theme.device.desktop} {
  }
  &:hover,
  &:focus {
    background-color: #8baa36;
    color: #fafafa;
  }
`;
export const HeroButtonDel = styled.button`
display: none;
padding: 10px 18px;
  background-color: transparent;
  color: #22252a;
  border-radius: 24px 44px;
  border: 1px solid #8baa36;
  transition: all 250ms linear;
  font-size: 10px;
  line-height: 1.5;
  @media ${theme.device.tablet};
   {
    padding: 18px 44px;
    font-size: 16px;
  }
  @media ${theme.device.desktop} {
  }
  &:hover,
  &:focus {
    background-color: #8baa36;
    color: #fafafa;
`;

export const CookingTimeContainer = styled.div``;

export const CookingTime = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  color: #23262A;
  margin-bottom: 140px;
  font-size: 14px;
  line-height: 1.4;
 
  @media ${theme.device.tablet} {
    font-size: 20px;
  margin-bottom: 0px;

  }
  @media ${theme.device.desktop} {
    font-size: 20px;
  margin-bottom: 0px;
    
  }
  & svg {
    margin-right: 5px;
    
    stroke: #23262A;
    display: inline-block;
    width: 14px;
    height: 14px;
    @media ${theme.device.tablet} {
      
      height: 20px;
      width: 20px;
    }
    @media ${theme.device.desktop} {
      
      height: 20px;
      width: 20px;
      
    }
`;

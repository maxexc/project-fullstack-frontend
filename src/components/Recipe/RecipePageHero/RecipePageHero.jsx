import {
  HeroContainer,
  HeroTiile,
  HeroText,
  CookingTime,
  HeroButtonAdd,
} from './RecipePageHero.styled';
import { UseSvg } from '../../../helpers/useSvg/useSvg';

export const RecipePageHero = ({
  title,
  description,
  time,
  addFavorite,
  removeFavorite,
  favorite,
}) => {
  return (
    <HeroContainer>
      <HeroTiile>{title}</HeroTiile>
      <HeroText>{description}</HeroText>
      {favorite ? (
        <HeroButtonAdd onClick={e => removeFavorite(e)}>
          Remove from favorite recipes
        </HeroButtonAdd>
      ) : (
        <HeroButtonAdd onClick={e => addFavorite(e)}>
          Add to favorite recipes
        </HeroButtonAdd>
      )}
      <CookingTime>
        <UseSvg id="Time" />
        {time} min
      </CookingTime>
    </HeroContainer>
  );
};

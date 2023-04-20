import { RecipePageHero } from 'components/Recipe/RecipePageHero/RecipePageHero';
import RecipeInngredientsList from 'components/Recipe/RecipeInngredientsList/RecipeInngredientsList';
import RecipePreparation from '../../components/Recipe/RecipePreparation/RecipePreparation';
import { useState, useEffect } from 'react';

import Notiflix from 'notiflix';

import {
  TitltListWrap,
  TitleListIngredient,
  TitleListNumber,
  AddtoList,
} from './RecipePage.styled';
import { MainContainer } from '../../components/MainContainer/MainContainer';
import queryBackEnd from '../../helpers/request/queryBackEnd';
import { useParams } from 'react-router-dom';

import { checkoutfavorite } from '../../helpers/RecipePage';

const RecipePage = () => {
  const [recipe, setRecipe] = useState({});
  const [favorite, setFavorite] = useState(false);
  const { recipeId } = useParams();

  // addFavorite
  const addFavorite = async e => {
    e.preventDefault();
    try {
      await queryBackEnd.queryAddFavorite({
        recipe: recipeId,
      });

      Notiflix.Notify.success('Add favorite.');

      setFavorite(true);
    } catch (err) {
      console.log(err);
    }
  };

  // removeFavorite
  const removeFavorite = async e => {
    try {
      e.preventDefault();
      queryBackEnd.queryRemoveFavorite({
        recipe: recipeId,
      });

      Notiflix.Notify.success('Remove favorite.');

      setFavorite(false);
    } catch (err) {
      console.log(err);
    }
  };

  const addIngrid = async ing => {
    try {
      const data = await queryBackEnd.queryAddShoppingList(ing);

      if (data.code === 200) {
        return Notiflix.Notify.success('Add in Shopping list.');
      }

      return Notiflix.Notify.failure('Error add in shopping list!!!');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      const check = await checkoutfavorite(recipeId);

      setFavorite(check);
      const data = await queryBackEnd.queryRecipeId(recipeId);

      setRecipe(data.result.data[0]);
    };
    fetchData();
  }, [recipeId]);

  return (
    <>
      <RecipePageHero
        title={recipe.title}
        description={recipe.description}
        time={recipe.time}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
        favorite={favorite}
      />
      <MainContainer>
        <TitltListWrap>
          <TitleListIngredient>Ingredients</TitleListIngredient>
          <TitleListNumber>Number</TitleListNumber>
          <AddtoList>Add to list</AddtoList>
        </TitltListWrap>

        <RecipeInngredientsList
          ingredients={recipe.ingredients}
          addIngrid={addIngrid}
        />
        <RecipePreparation
          imageUrl={recipe.imageUrl}
          instructions={recipe.instructions}
        />
      </MainContainer>
    </>
  );
};

export default RecipePage;

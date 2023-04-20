import {
  InngredientsList,
  RecipeItem,
  InngredientContainer,
  ImageWrapper,
  IngName,
  IngDescr,
  RealCheckbox,
} from './RecipeInngredientsList.styled';
import CheckBox from './CheckBox';

const RecipeInngredientsList = ({ ingredients, addIngrid }) => {
  return (
    <InngredientsList>
      {ingredients &&
        ingredients.map(ingredient => (
          <RecipeItem key={ingredient._id}>
            <InngredientContainer>
              <ImageWrapper>
                <img src={ingredient.imageUrl} alt={ingredient.name} />
              </ImageWrapper>
              <IngName>{ingredient.title}</IngName>
              <IngDescr>{ingredient.measure}</IngDescr>
            </InngredientContainer>
            <RealCheckbox type="checkbox" />

            <CheckBox
              addIngrid={addIngrid}
              id={ingredient._id}
              measure={ingredient.measure}
            ></CheckBox>
          </RecipeItem>
        ))}
    </InngredientsList>
  );
};

export default RecipeInngredientsList;

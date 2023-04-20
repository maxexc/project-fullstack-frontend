import {
  List,
  Item,
  ImageContainer,
  ItemContainer,
  TitleProduct,
  NumberContainer,
  Remove,
  RemoveSvg,
} from './IngredientsShoppingList.styled';
import UseSvg from '../../helpers/useSvg/useSvg';

import { SortArrFromTitle } from '../../helpers/sort/sortArrFromTitle';

const IngredientsShoppingList = ({ ingredients, deleteIngradient }) => {
  const ingredientsSort = SortArrFromTitle(ingredients);

  return (
    <List>
      {ingredientsSort.map(ingredient => (
        <Item key={ingredient._id}>
          <ItemContainer>
            <ImageContainer>
              <img src={ingredient.imageUrl} alt="ingredient" />
            </ImageContainer>
            <TitleProduct>{ingredient.title}</TitleProduct>
            <NumberContainer>{ingredient.measure}</NumberContainer>
            <Remove type="button">
              <RemoveSvg onClick={() => deleteIngradient(ingredient._id)}>
                <UseSvg id="remove" />
              </RemoveSvg>
            </Remove>
          </ItemContainer>
        </Item>
      ))}
    </List>
  );
};
export default IngredientsShoppingList;

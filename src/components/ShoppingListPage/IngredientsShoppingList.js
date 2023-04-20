import {
  List,
  Item,
  ImageContayner,
  ItemContayner,
  TitleProduct,
  NumberContayner,
  Remove,
} from './IngredientsShoppingList.styled';

const IngredientsShoppingList = () => {
  return (
    <List>
      <Item>
        <ItemContayner>
          <ImageContayner></ImageContayner>
          <TitleProduct>Salmon</TitleProduct>
          <NumberContayner>5</NumberContayner>
          <Remove>x</Remove>
        </ItemContayner>
      </Item>
    </List>
  );
};
export default IngredientsShoppingList;

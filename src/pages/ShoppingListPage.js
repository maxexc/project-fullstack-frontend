import IngredientsShoppingList from '../components/ShoppingListPage';
import {
  TitltList,
  TitleListProducts,
  TitleListNumber,
} from './ShoppingListPage.styled';

const ShoppingListPage = () => {
  // тут буде запит за коллекцією інградієнтів
  return (
    <div>
      <h2>Shopping list</h2>
      <div>
        <TitltList>
          <TitleListProducts>Products</TitleListProducts>
          <TitleListNumber>Number</TitleListNumber>
          <span>Remove</span>
        </TitltList>
        <IngredientsShoppingList />
      </div>
    </div>
  );
};

export default ShoppingListPage;

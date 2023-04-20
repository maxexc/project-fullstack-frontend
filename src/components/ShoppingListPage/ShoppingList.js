import { useEffect, useState } from 'react';
import IngredientsShoppingList from './IngredientsShoppingList';
import {
  TitltList,
  TitleListProducts,
  TitleListNumber,
  ImgIngradientsContainer,
  ImgIngradients,
  ImgIngradientsText,
} from './ShoppingList.styled';
import Notiflix from 'notiflix';
import queryBackEnd from '../../helpers/request/queryBackEnd';
import imgIngradients from '../../images/ShopingList/ingradients.png';

const ShoppingList = () => {
  const [ingredientArr, setingredientArr] = useState([]);
  useEffect(() => {
    queryBackEnd.queryShoppingList().then(response => {
      setingredientArr(response.data);
    });
  }, []);

  const deleteIngradient = contactId => {
    queryBackEnd
      .queryRemoveShoppingList({ shoppingListIng: contactId })
      .then(response => {
        console.log(response);
        if (response.status === 'success') {
          Notiflix.Notify.success('ingredient removed');
        }
        else{ Notiflix.Notify.warning(`${response}`);}
               
        setingredientArr(prevState =>
          prevState.filter(ingradient => ingradient._id !== contactId)
        );
      })
      .catch(error => {
        Notiflix.Notify.warning('error');
      });
  };

  return (
    <div>
      {ingredientArr.length > 0 ? (
        <>
          <TitltList>
            <TitleListProducts>Products</TitleListProducts>
            <TitleListNumber>Number</TitleListNumber>
            <span>Remove</span>
          </TitltList>
          <IngredientsShoppingList
            ingredients={ingredientArr}
            deleteIngradient={deleteIngradient}
          />
        </>
      ) : (
        <ImgIngradientsContainer>
          <ImgIngradients src={imgIngradients} alt="ingredient" />
          <ImgIngradientsText>Your shopping list is empty.</ImgIngradientsText>
        </ImgIngradientsContainer>
      )}
    </div>
  );
};
export default ShoppingList;

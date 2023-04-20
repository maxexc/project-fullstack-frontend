import instanceBacEnd from '../requestBackEnd';

// получить список 4 категорий с рецептами
// кол-во рецептов завист от параметра query
const queryRecipeMinePage = async quantity => {
  try {
    const { data } = await instanceBacEnd.get(
      `/recipes/main-page?query=${quantity}`
    );
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

// получуть рецепты по названию категории
// Приймаэ назву категорії в форматы рядка
const queryRecipeCategori = async category => {
  try {
    const { data } = await instanceBacEnd.get(`/recipes/category/${category}`);

    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

// получить один рецепт по id
// приймає id рецепта в форматі рядка "235718184621948"
const queryRecipeId = async id => {
  try {
    const { data } = await instanceBacEnd.get(`/recipes/${id}`);

    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

// підписка на розсилку
const querySubscribe = async email => {
  try {
    const { data } = await instanceBacEnd.post(`/subscribe`, { email });
    console.log(data);
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

// отримати список своїх рецептів
const queryOwnRecipes = async () => {
  try {
    const { data } = await instanceBacEnd.get(`/ownRecipes`);
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

// видалення рецепта його власником
// Приймаэ id в форматі рядка
const queryOwnRecipesDelete = async id => {
  try {
    const { data } = await instanceBacEnd.get(`/ownRecipes/${id}`);
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

// получить весь список категорий
const queryCategoryList = async () => {
  try {
    const { data } = await instanceBacEnd.get('/recipes/category-list');
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

// получить весь список ингредиентов
const queryAllIngredients = async () => {
  try {
    const { data } = await instanceBacEnd.get('/ingredients/list');
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

// получить весь список популярных рецептов
const queryPopular = async query => {
  try {
    const { data } = await instanceBacEnd.get(`/popular-recipe?query=${query}`);
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

// додавання рецепту до favotie
const queryAddFavorite = async id => {
  try {
    const data = await instanceBacEnd.patch(`/favorite/add`, id);
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

// видалення рецепту з favorite
const queryRemoveFavorite = async id => {
  try {
    const data = await instanceBacEnd.patch(`/favorite/remove`, id);
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

// отримання масиву з рецептами  favotie

const queryAllFavorite = async () => {
  try {
    const { data } = await instanceBacEnd.get(`/favorite`);
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

// пошук рецептів
// повертає масив страв за данними пошуку
// приймає type запиту(ingredients або title); запит query; page сторінка; limit ліміт на 1 сторінкі
const querySearch = async (type, query, limit = 6, page = 1) => {
  try {
    const { data } = await instanceBacEnd.get(
      `/search?page=${page}&limit=${limit}&query=${query}&type=${type}`
    );
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

// отримати список покупок
const queryShoppingList = async () => {
  try {
    const { data } = await instanceBacEnd.get(`/shopping-list`);
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

// отримати список покупок
// Приймаэ об'єкт: {ing: [ {id: "640c2dd963a319ea671e3660",  measure: "0.5 kg"}]}
const queryAddShoppingList = async list => {
  try {
    const { data } = await instanceBacEnd.patch(`/shopping-list/add`, list);
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

// отримати список покупок
// Приймає об'єкт: {shoppingListIng: "642d6155d0e6edcddc9507c6"}
const queryRemoveShoppingList = async idIng => {
  try {
    const { data } = await instanceBacEnd.patch(`/shopping-list/remove`, idIng);
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

const queryAddRecipe = async data => {
  try {
    const add = await instanceBacEnd.post('/ownRecipes', data, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    });
    return add.status;
  } catch (err) {
    console.log(err.response.data.message);
    return err.response.data.message;
  }
};

const queryBackEnd = {
  queryRecipeMinePage,
  queryRecipeCategori,
  queryRecipeId,

  querySubscribe,

  queryOwnRecipes,
  queryOwnRecipesDelete,

  queryCategoryList,

  querySearch,

  queryAllIngredients,
  queryPopular,

  queryAddFavorite,
  queryRemoveFavorite,
  queryAllFavorite,

  queryShoppingList,
  queryAddShoppingList,
  queryRemoveShoppingList,

  queryAddRecipe,
};

export default queryBackEnd;

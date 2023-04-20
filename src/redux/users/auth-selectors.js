const getUsername = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getAvatar = state => state.auth.user.avatarURL;
const getFavorites = state => state.auth.user.favorites;
const getShoppingList = state => state.auth.user.shoppingList;
const getGetingCurentUser = state => state.auth.isGetingCurentUser;
const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsError = state => state.auth.error;
const getTheme = state => state.auth.theme;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserEmail,
  getAvatar,
  getGetingCurentUser,
  getFavorites,
  getShoppingList,
  getIsError,
  getTheme,
};
export default authSelectors;

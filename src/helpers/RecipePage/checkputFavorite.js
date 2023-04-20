import { queryBackEnd } from '../request';
export default async function checkoutfavorite(id) {
  const favorite = await queryBackEnd.queryAllFavorite();

  if (favorite === 'The recipe list is empty') {
    return false;
  }
  const list = favorite.result.data.list;
  const checkout = list.find(item => item._id === id);
  if (!checkout) {
    return false;
  }

  return true;
}

import ListRestaurant from '../views/pages/list-resto';
import DetailRestaurant from '../views/pages/detail';
import FavoriteRestaurant from '../views/pages/favorite';

const routes = {
  '/': ListRestaurant,
  '/list': ListRestaurant,
  '/detail/:id': DetailRestaurant,
  '/favorite': FavoriteRestaurant,
};

export default routes;

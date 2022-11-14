import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { restoranDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const DetailRestaurant = {
  async render() {
    return `
          <div id="detail-resto">
            
          </div>
          <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const detailResto = restaurant.restaurant;
    const templ = restoranDetailTemplate(detailResto);
    document.querySelector('#detail-resto').innerHTML = templ;
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: detailResto.id,
        name: detailResto.name,
        description: detailResto.description,
        city: detailResto.city,
        rating: detailResto.rating,
        pictureId: detailResto.pictureId,

      },
    });
  },
};

export default DetailRestaurant;

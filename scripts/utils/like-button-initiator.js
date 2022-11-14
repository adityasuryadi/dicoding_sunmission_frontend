import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';
import FavoriteRestoIdb from '../data/favoriteresto-db';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this.likeButtonContainer = likeButtonContainer;
    this.restaurant = restaurant;
    await this.renderButton();
  },

  async renderButton() {
    const { id } = this.restaurant;
    // console.log(this.renderLiked());
    if (await this.isRestaurantExist(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  },

  async isRestaurantExist(id) {
    const restaurant = await FavoriteRestoIdb.getRestaurant(id);
    return !!restaurant;
  },

  renderLike() {
    this.likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putRestaurant(this.restaurant);
      this.renderButton();
    });
  },

  renderLiked() {
    this.likeButtonContainer.innerHTML = createLikedButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteRestaurant(this.restaurant.id);
      this.renderButton();
    });
  },
};

export default LikeButtonInitiator;

/* eslint-disable no-underscore-dangle */

class FavoriteRestaurantShowPresenter {
  constructor({ view, favoriteRestaurant }) {
    this._view = view;
    this._favoriteRestaurant = favoriteRestaurant;

    this._showFavoriteRestaurant();
  }

  async _showFavoriteRestaurant() {
    const restaurants = await this._favoriteRestaurant.getAllRestaurants();
    this.displayRestaurants(restaurants);
  }

  displayRestaurants(restaurants) {
    this._view.showFavoriteRestaurants(restaurants);
  }
}

export default FavoriteRestaurantShowPresenter;

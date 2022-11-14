/* eslint-disable class-methods-use-this */
import { restoranItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantView {
  getFavoriteRestaurantTemplate() {
    return `
        <div class="content">
            <h2 class="title-content">Your Favorite Restaurant</h2>
            <section id="cards" class="cards">
            </section>
        </div>
    `;
  }

  showFavoriteRestaurants(restaurants) {
    let html;
    if (restaurants.length) {
      html = restaurants.map((resto) => `<div class="cards_item">${restoranItemTemplate(resto)}</div>`);
    } else {
      html = '<div class="cards-item__not__found"></div>';
    }
    document.getElementById('cards').innerHTML = html;
    document.getElementById('cards').dispatchEvent(new Event('cards:updated'));
  }
}

export default FavoriteRestaurantView;

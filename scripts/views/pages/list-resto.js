import RestaurantSource from '../../data/restaurant-source';
import { restoranItemTemplate } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
    <section class="hero lazyload">
    <div class="hero-text">
      <h1>Cari Tempat Makan Yang Enak?</h1>
      <article>
          <p>Kunjungi lah partner kami</p>
          <a class="btn-hero" href="#about">Pilih Layanan</a>
      </article>
    </div>
</section>
        <h2 class="title-content">List Restoran</h2>
        <hr>
        <div class="cards" id="cards">
              
        </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurant();
    // this.updateDom(restaurants);
    const cardContainer = document.getElementById('cards');
    if (restaurants.length) {
      restaurants.forEach((element) => {
        const card = document.createElement('div');
        card.className = 'cards_item';
        card.innerHTML = restoranItemTemplate(element);
        cardContainer.appendChild(card);
      });
    } else {
      cardContainer.className = 'cards_item__not__found';
    }
  },

};

export default ListRestaurant;

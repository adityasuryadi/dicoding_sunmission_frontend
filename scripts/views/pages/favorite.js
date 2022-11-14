import FavoriteRestoIdb from '../../data/favoriteresto-db';
import { restoranItemTemplate } from '../templates/template-creator';

const FavoriteRestaurant = {
  async render() {
    return `
    <section class="hero">
    <div class="hero-text">
      <h1>Cari Tempat Makan Yang Enak?</h1>
      <article>
          <p>Kunjungi lah partner kami</p>
          <a class="btn-hero" href="#about">Pilih Layanan</a>
      </article>
    </div>
</section>
            <h2 class="title-content">Favorite Restoran</h2>
            <hr>
            <section class="cards" id="cards">
                  
            </section>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestaurants();
    const cardElem = document.getElementById('cards');
    if (restaurants.length) {
      restaurants.forEach((element) => {
        const card = document.createElement('div');
        card.className = 'cards_item';
        card.innerHTML = restoranItemTemplate(element);
        cardElem.appendChild(card);
      });
    } else {
      cardElem.className = 'cards_item__not__found';
      cardElem.innerText = 'Tidak ada restoran untuk ditampilkan';
    }
  },
};

export default FavoriteRestaurant;

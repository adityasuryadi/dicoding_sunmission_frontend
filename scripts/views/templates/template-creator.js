import CONFIG from '../../globals/config';

const restoranItemTemplate = (restaurant) => {
  const {
    id, name, description, city, rating, pictureId,
  } = restaurant;
  const temp = ` 
                            <div class="card">
                                <div class="card_header">
                                  <div class="card_image"><img data-src="${pictureId ? CONFIG.BASE_IMAGE_URL + pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="foto restoran" class="lazyload"></div>
                                  <div class="card_city">
                                    <p>${city}</p>
                                  </div>
                                </div>
                                <h2 class="rating">Rating : ${rating}</h2>
                                <div class="card_content">
                                    <h2 class="card_title">${name}</h2>
                                    <p class="card_text">${description.substr(0, 200)}...</p>
                                    <a href="/#/detail/${id}" class="btn">Read More</a>
                                </div>
                            </div>
                            <div>
                        `;
  return temp;
};

const elmCategories = (categories) => {
  let temp = '';
  categories.forEach(({ name }) => {
    temp += `<li class="about-resto-text"> ${name} </li>`;
  });
  return temp;
};

const elmMenus = ({ foods, drinks }) => {
  const temp = {
    makanan: '',
    minuman: '',
  };
  // fungsi buat nambahin nama makanan dan minuman ke elemen
  const addToProp = (menu) => {
    let elm = '';
    menu.forEach(({ name }) => {
      elm += `<li> ${name} </li>`;
    });
    return elm;
  };

  temp.makanan = addToProp(foods);
  temp.minuman = addToProp(drinks);
  return temp;
};

const elmReview = (customersReview) => {
  let temp = '';
  customersReview.forEach(({ name, review, date }) => {
    temp += `<div class="review-customer-container">
                <figure class="review-item">
                    <img src="avatar.png" alt="avatar" class="avatar">  </img>
                </figure>

                <div class="review-item">
                    <h2 class="reviewer-name">${name}</h2>
                    <p class="review-date">${date}</p>
                    <p class="reviewer-comment"> ${review}  </p>
                </div>
            </div>`;
  });
  return temp;
};

const restoranDetailTemplate = (restaurant) => ` 
     
        <figure id="img-detail">
          <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="foto-restoran">
        </figure>

      <div id="about-resto-container">
        <h2 id="nama-resto">${restaurant.name}</h2>
        <h2 class="about-resto-text">Kota : ${restaurant.city}</h2>
        <h2 class="about-resto-text">Alamat : ${restaurant.address}</h2>
        <h2 class="about-resto-text">Rating : ${restaurant.rating}</h2>

          <div class="kategori">
            <h2 class="about-resto-text">Kategori : </h2>
              <ul>
              ${elmCategories(restaurant.categories)}
              </ul>
          </div>

        <hr class="detail-garis">
        <div id="desc-resto">
          <p>${restaurant.description}</p>
        </div> 
      </div>
      
      <div id="about-resto-content">
        <section id="menu-resto">
          <h2 class="title-content">Menu</h2>
          <hr>
          <div class="menu-container">
            
              <div class="menu-item">
                <h2> Makanan </h2>
                <ol>
                  ${elmMenus(restaurant.menus).makanan}
                </ol>
              </div>

              <div class="menu-item">
                <h2> Minuman </h2>
                  <ol>
                    ${elmMenus(restaurant.menus).minuman}
                  </ol>
              </div>
          </div>
        </section>
      </div>

        <div id="review-resto">
          <h2 class="title-content review">Review</h2>
            <div id="list-reviews-container">
            ${elmReview(restaurant.customerReviews)}
            </div>
        </div>
                            `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  restoranItemTemplate, restoranDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate,
};

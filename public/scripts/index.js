const createRestEl = (restaurant) => {
  return `<article class="d-flex justify-content-between px-5 py-3 restaurant">
  <!-- RESTAURANT SLIDESHOW -->
  <div id="carouselExampleIndicators" class="carousel slide restaurant-slideshow" data-ride="carousel">
    <h2>SLIDESHOW</h2>
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="${restaurant.slide_3_url}" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src='${restaurant.slide_2_url}' alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="${restaurant.slide_1_url}" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  <!-- RESTAURANT DESCRIPTION -->
  <div class="rest-description pl-2 py-3">
      <h2>${restaurant.title}</h2>
      <p class="p-lead">${restaurant.cuisine_type}</p>
      <p>${restaurant.hours_of_operation}</p>
  </div>
</article>`;
};

// for Each Restaurant in the database exctract single restaurant
// use in print Restaurant Function
const printRest = (allRestaurants) => {
  for (let restaurant of allRestaurants) {
    $(".restaurants").append(createRestEl(restaurant));
  };
};


$(() => {

});

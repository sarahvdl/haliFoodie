import $ from 'jquery';

const config = {
  protocol: 'http',
  host: 'localhost',
  port: 3000
};

class RestaurantApi {

  static getUrl(path) {
    return `${config.protocol}://${config.host}:${config.port}/${path}`;
  }

  static getAllRestaurants() {
    return new Promise((resolve, reject) => {
      const restaurants = $.ajax({
                  url:  this.getUrl("restaurantsData"),
                  type: "GET"
                  });
      resolve(Object.assign({}, restaurants));
    });
  }

  static saveRestaurant(restaurant) {
    restaurant = Object.assign({}, restaurant); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      $.ajax({
        url: this.getUrl("restaurantsData"),
        type: "POST",
        data: {restaurant: restaurant}
      });

      resolve(Object.assign({}, restaurant));
    });
  }
}

export default RestaurantApi;

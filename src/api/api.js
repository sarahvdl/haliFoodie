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

  // static saveRestaurant(restaurant) {
  //   console.log("In saveRestaurant in real api");
  //   restaurant = Object.assign({}, restaurant); // to avoid manipulating object passed in.
  //   return new Promise((resolve, reject) => {
  //     console.log('in api add restaurant with restaurant:');
  //     console.log(restaurant);
  //
  //     $.ajax({
  //       url: this.getUrl("restaurantsData"),
  //       type: "POST",
  //       data: restaurant
  //     });
  //
  //     console.log('after ajax call!');
  //
  //     resolve(restaurant);
  //   });
  // }

  static saveRestaurant(restaurant) {
    console.log("In saveRestaurant in real api");
    restaurant = Object.assign({}, restaurant); // to avoid manipulating object passed in.

    $.ajax({
      url: this.getUrl("restaurantsData"),
      type: "POST",
      data: restaurant
    });

    console.log('after ajax call!');
  }
}

export default RestaurantApi;

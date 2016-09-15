import delay from './delay';

const restaurants = [
  {
    name: "The Bicycle Thief",
    location: "1475 Lower Water Street",
    rating: 5,
    comment: "Great pasta!"
  },
  {
    name: "2 Doors Down",
    location: "1533 Barrington Street",
    rating: 4,
    comment: "Great burgers!"
  }
];

class RestaurantApi {
  static getAllRestaurants() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], restaurants));
      }, delay);
    });
  }

  static saveRestaurant(restaurant) {
    console.log("In saveRestaurant in mock api");
    restaurant = Object.assign({}, restaurant); // to avoid manipulating object passed in.
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate server-side validation
          // const minAuthorNameLength = 3;
          // if (author.firstName.length < minAuthorNameLength) {
          //   reject(`First Name must be at least ${minAuthorNameLength} characters.`);
          // }
          //
          // if (author.lastName.length < minAuthorNameLength) {
          //   reject(`Last Name must be at least ${minAuthorNameLength} characters.`);
          // }
          //
          // if (author.id) {
          //   const existingAuthorIndex = authors.findIndex(a => a.id == author.id);
          //   authors.splice(existingAuthorIndex, 1, author);
          // } else {
            //Just simulating creation here.
            //The server would generate ids for new authors in a real app.
            //Cloning so copy returned is passed by value rather than by reference.
            // author.id = generateId(author);
            restaurants.push(restaurant);
          // }

          resolve(restaurant);
        }, delay);
      });
  }
}

export default RestaurantApi;

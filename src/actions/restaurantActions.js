import * as types from './actionTypes';

export function addRestaurant(restaurant) {
  console.log('in add restaurant!');
  return {type: types.ADD_RESTAURANT, restaurant};
}

export function loadRestaurants() {
  return {type: types.LOAD_RESTAURANTS};
}

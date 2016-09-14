import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function restaurantReducer(state = initialState, action) {
  switch(action.type) {
    case types.ADD_RESTAURANT:
    {
      let newRestaurants = state.restaurants.slice();
      newRestaurants.push(action.restaurant);
      return {
        restaurants : newRestaurants
      };
    }

    default:
      return state;
  }
}

import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function restaurantReducer(state = initialState, action) {
  switch(action.type) {
    case types.LOAD_RESTAURANTS_SUCCESS:
    {
      return action.restaurants;
    }

    case types.CREATE_RESTAURANT_SUCCESS:
    {
      let newRestaurants = state.slice();
      newRestaurants.push(action.restaurant);
      return {
        restaurants : newRestaurants
      };
    }

    default:
      return state;
  }
}

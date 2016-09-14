import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function restaurantReducer(state = initialState, action) {
  switch(action.type) {
    case types.ADD_RESTAURANT:
      return [
        ...this.state,
        Object.assign({}, action.restaurant)
      ];

    default:
      return state;
  }
}

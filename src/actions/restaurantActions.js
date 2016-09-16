import * as types from './actionTypes';
// import api from '../api/mockRestaurantApi';  //to point to a real api, just need to change this
import api from '../api/api';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

/// ACTION CREATORS ///
export function loadRestaurantsSuccess(restaurants) {
  return {type: types.LOAD_RESTAURANTS_SUCCESS, restaurants};
}

export function createRestaurantSuccess(restaurant) {
  return {type: types.CREATE_RESTAURANT_SUCCESS, restaurant};
}

export function deleteRestaurantSuccess() {
  return {type: types.REMOVE_RESTAURANT_SUCCESS};
}

/// THUNKS ///
export function loadRestaurants() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return api.getAllRestaurants()
      .then(restaurants => {
        dispatch(loadRestaurantsSuccess(restaurants));
      }).catch(error => {
        throw(error);
      });
  };
}

export function saveRestaurant(restaurant) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return api.saveRestaurant(restaurant)
      .then(savedRestaurant => {
          dispatch(createRestaurantSuccess(savedRestaurant));
          dispatch(loadRestaurants());
          console.log('successfully added restaurant!'); })
      .catch(error => {
        console.log('did not successfully create restaurant!');
        console.log(error);
        dispatch(ajaxCallError(error));
        throw(error);
      });
  };
}

export function deleteRestaurant(restaurant) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return api.deleteRestaurant(restaurant)
      .then(() => {
          dispatch(deleteRestaurantSuccess());
          dispatch(loadRestaurants());
          console.log('successfully deleted restaurant!'); })
      .catch(error => {
        console.log('did not successfully delete restaurant!');
        console.log(error);
        dispatch(ajaxCallError(error));
        throw(error);
      });
  };
}

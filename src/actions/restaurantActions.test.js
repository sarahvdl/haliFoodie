import expect from 'expect';
import * as restaurantActions from './restaurantActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

//Test a sync action
describe('Restaurant Actions', () => {
  describe('addRestaurant', () => {
    it('should create a ADD_RESTAURANT action', () => {
      //arrange
      const restaurant = {name: 'Fake Restaurant', location: '123 Fake Road', rating: 4, comment: "Fake food."};
      const expectedAction = {
        type: types.ADD_RESTAURANT,
        restaurant: restaurant
      };

      //act
      const action = restaurantActions.addRestaurant(restaurant);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});

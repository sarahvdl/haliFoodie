import React, {PropTypes} from 'react';
import Restaurant from './Restaurant';
import RemoveButton from '../common/RemoveButton';

const RestaurantsList = ({restaurants, onDelete}) => (
  <div>
    {restaurants.map(restaurant =>
      <div>
        <Restaurant
          key={restaurant.name}
          name={restaurant.name}
          location={restaurant.location}
          rating={restaurant.rating}
          comment={restaurant.comment}
          />
        <RemoveButton
          restaurant={restaurant}
          onClick={onDelete}
          />
        <hr className="restaurant-divider"></hr>
      </div>
    )}
  </div>
);

RestaurantsList.propTypes = {
  restaurants: PropTypes.array.isRequired
};

export default RestaurantsList;

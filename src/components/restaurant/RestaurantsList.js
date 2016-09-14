import React, {PropTypes} from 'react';
import Restaurant from './Restaurant';

const RestaurantsList = ({restaurants}) => (
  <div>
    {restaurants.map(restaurant =>
      <Restaurant
        key={restaurant.name}
        name={restaurant.name}
        location={restaurant.location}
        rating={restaurant.rating}
        comment={restaurant.comment}
        />
    )}
  </div>
);

RestaurantsList.propTypes = {
  restaurants: PropTypes.array.isRequired
};

export default RestaurantsList;

import React, {PropTypes} from 'react';
import Restaurant from './Restaurant';
import RemoveButton from '../common/RemoveButton';
import EditButton from '../common/EditButton';

const RestaurantsList = ({restaurants, onDelete, onEdit}) => (
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
        &nbsp;&nbsp;&nbsp;
        <EditButton
          restaurant={restaurant}
          onClick={onEdit}
          />
        <hr className="restaurant-divider"></hr>
      </div>
    )}
  </div>
);

RestaurantsList.propTypes = {
  restaurants: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default RestaurantsList;

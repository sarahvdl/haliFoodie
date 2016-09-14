import React, {PropTypes} from 'react';
import StarRatingComponent from 'react-star-rating-component';

const StarRating = ({name, rating, onStarClick, editing}) => (
  <div style={{fontSize: 40}}>
    <StarRatingComponent
      name={name}
      value={rating}
      starColor="#0f848a"
      emptyStarColor="grey"
      onStarClick={onStarClick}
      editing={editing}
      />
  </div>
);

StarRating.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  onStarClick: PropTypes.func,
  editing: PropTypes.bool.isRequired
};

export default StarRating;

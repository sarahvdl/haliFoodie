import React, {PropTypes} from 'react';
import StarRating from './StarRating';

const Restaurant = ({name, location, rating, comment}) => (
  <div>
    <div className="featurette">
        <img src={require('../images/pasta.jpg')} className="featurette-image img-circle img-responsive pull-left"></img>
        <h2 className="featurette-heading">{name}
            <span className="text-muted"> - {location}</span>
        </h2>
        <div style={{fontSize: 40}}>
          <StarRating
            name={name + 'rating'}
            rating={rating}
            editing={false}
            />
        </div>
        <p className="lead">{comment}</p>
    </div>
    <hr className="restaurant-divider"></hr>
  </div>
);

Restaurant.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string
};

export default Restaurant;

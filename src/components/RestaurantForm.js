import React, {PropTypes} from 'react';
import StarRating from './StarRating';

const RestaurantForm = ({onSave, saving}) => {
  return (
    <div className="container-fluid">
      <form>
        <h1>Add Restaurant:</h1>

        <StarRating
          name="restaurantRating"
          editing
          rating={0}
          />
        <input
          type="submit"
          disabled={saving}
          value={saving ? 'Saving...' : 'Save'}
          className="btn btn-primary"
          onClick={onSave}/>
      </form>
    </div>
  );
};

RestaurantForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default RestaurantForm;

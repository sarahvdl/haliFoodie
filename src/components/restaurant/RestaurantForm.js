import React, {PropTypes} from 'react';
import StarRating from '../common/StarRating';
import * as restaurantActions from '../../actions/restaurantActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TextInput from '../common/TextInput';
import CommentBox from '../common/CommentBox';
import Dropzone from 'react-dropzone';

class RestaurantForm extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        restaurant: props.restaurant,
        onSuccessfulValidation: props.onSuccessfulValidation,
        restaurants: props.restaurants,
        errors: {},
        files: {}
      };

      this.updateRestaurantState = this.updateRestaurantState.bind(this);
      this.submitRestaurant = this.submitRestaurant.bind(this);
      this.onStarClick = this.onStarClick.bind(this);
      this.resetForm = this.resetForm.bind(this);
      this.onDropPhoto = this.onDropPhoto.bind(this);
    }

    updateRestaurantState(event) {
      const field = event.target.name;
      let restaurant = this.state.restaurant;
      restaurant[field] = event.target.value;
      return this.setState({restaurant:restaurant});
    }

    submitRestaurant(event) {
      event.preventDefault();

      /* If no errors, successful continue, else show errors */
      if(this.formIsValid()) {
        this.state.onSuccessfulValidation(event, this.state.restaurant);
      }
    }

    formIsValid() {
      let formIsValid = true;
      let errors = {};

      if(this.restaurantExists(this.state.restaurant)) {
        errors.name = 'There is already an entry for this restaurant!';
        formIsValid = false;
      }
      if(this.state.restaurant.name.length < 1) {
        errors.name = 'Name cannot be blank.';
        formIsValid = false;
      }
      if(this.state.restaurant.location.length < 1) {
        errors.location = 'Location cannot be blank.';
        formIsValid = false;
      }
      if(!this.state.restaurant.rating) {
        errors.rating = 'Rating cannot be blank.';
        formIsValid = false;
      }

      this.setState({errors: errors});
      return formIsValid;
    }

    restaurantExists(restaurant) {
      let exists = false;
      const restaurants = this.state.restaurants;
      for(let i = 0; i < restaurants.length; i++) {
          if (restaurants[i].name == restaurant.name) {
              exists = true;
              break;
          }
      }
      return exists;
    }

    onStarClick(nextValue, prevValue, name) {
      let restaurant = this.state.restaurant;
      restaurant["rating"] = nextValue;
      this.setState({restaurant:restaurant});
   }

   onDropPhoto(file) {
      this.setState({files: file});
    }

   resetForm(event) {
     let restaurant = {name: "", location: "", rating: "", comment:""};
     return this.setState({restaurant:restaurant});
   }

    render() {
      return (
        <div className="container-fluid">
          <form onSubmit={this.submitRestaurant}>
            <h1>Add Restaurant Review:</h1>
            <br></br>

            <TextInput
              name="name"
              label="Restaurant Name:"
              onChange={this.updateRestaurantState}
              error={this.state.errors.name}
              />

            <TextInput
              name="location"
              label="Location:"
              onChange={this.updateRestaurantState}
              error={this.state.errors.location}
              />

            <b>Overall Rating:</b>
            <br></br>
            <StarRating
              name="restaurantRating"
              editing
              rating={0}
              onStarClick={this.onStarClick}
              />
            {this.state.errors.rating && <div className="alert alert-danger">{this.state.errors.rating}</div>}

            <CommentBox
              title="Comments:"
              onChange={this.updateRestaurantState}
              />

            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.onDropPhoto}>
              <div className="text-center">
                <br></br>
                <br></br>
                <br></br>
                Click to upload a photo or simply drop one here!
              </div>
            </Dropzone>
            <br></br>

            {this.state.file && <img src={this.state.file.preview} />}
            <br></br>

            <input
              type="submit"
              className="btn btn-primary"
              />
            &nbsp;&nbsp;&nbsp;
            <input
              type="reset"
              className="btn btn-primary"
              onClick={this.resetForm}
              />
          </form>
        </div>
      );
    }
}

RestaurantForm.propTypes = {
  restaurants: PropTypes.array.isRequired,
  restaurant: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  onSuccessfulValidation: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  console.log('in mapStateToProps in restaurantsPage');
  console.log('state:');
  console.log(state);
  let restaurant = {name: '', location: '', rating: '', comment: ''};

  return {
    restaurant: restaurant,
    onSuccessfulValidation: ownProps.onSave,
    restaurants: state.restaurants
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(restaurantActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantForm);

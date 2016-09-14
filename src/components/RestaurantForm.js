import React, {PropTypes} from 'react';
import StarRating from './StarRating';
import * as restaurantActions from '../actions/restaurantActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class RestaurantForm extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        restaurant: props.restaurant,
        onSave: props.onSave
      };

      this.updateRestaurantState = this.updateRestaurantState.bind(this);
      this.submitRestaurant = this.submitRestaurant.bind(this);
      this.onStarClick = this.onStarClick.bind(this);
    }

    updateRestaurantState(event) {
      const field = event.target.name;
      let restaurant = this.state.restaurant;
      restaurant[field] = event.target.value;
      return this.setState({restaurant:restaurant});
    }

    submitRestaurant(event) {
      event.preventDefault();
      this.props.actions.addRestaurant(this.state.restaurant);
      this.state.onSave(event);
    }

    onStarClick(nextValue, prevValue, name) {
      let restaurant = this.state.restaurant;
      restaurant["rating"] = nextValue;
      this.setState({restaurant:restaurant});
   }

    render() {
      return (
        <div className="container-fluid">
          <form onSubmit={this.submitRestaurant}>
            <h1>Add Restaurant:</h1>
            <br></br>

            Name: <input
              type="text"
              name="name"
              onChange={this.updateRestaurantState}></input>
            <br></br>
            <br></br>

            Location: <input
              type="text"
              name="location"
              onChange={this.updateRestaurantState}></input>
            <br></br>
            <br></br>

            <StarRating
              name="restaurantRating"
              editing
              rating={0}
              onStarClick={this.onStarClick}
              />
            <br></br>

            Comment: <input
              type="text"
              name="comment"
              onChange={this.updateRestaurantState}></input>

            <br></br>
            <br></br>

            <input
              type="submit"
              className="btn btn-primary"
              />
          </form>
        </div>
      );
    }
}

RestaurantForm.propTypes = {
  restaurant: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  let restaurant = {key: "3", name: '', location: '', rating: '', comment: ''};

  return {
    restaurant: restaurant,
    onSave: ownProps.onSave
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(restaurantActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantForm);

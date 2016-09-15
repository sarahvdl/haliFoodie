import React, {PropTypes} from 'react';
import RestaurantList from './RestaurantsList';
import {connect} from 'react-redux';
import RestaurantForm from './RestaurantForm';
import toastr from 'toastr';
import HeaderImage from '../common/HeaderImage';
import Footer from '../common/Footer';
import {bindActionCreators} from 'redux';
import * as restaurantActions from '../../actions/restaurantActions';

class RestaurantsPage extends React.Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
        restaurants: Object.assign({}, props),
        adding: false
      };

      this.showForm = this.showForm.bind(this);
      this.saveRestaurant = this.saveRestaurant.bind(this);
  }

  showForm() {
    this.setState({adding:true});
  }

  saveRestaurant(event, restaurant) {
    event.preventDefault();

    this.props.actions.saveRestaurant(restaurant)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
      });
  }

  redirect() {
    this.setState({adding: false});
    toastr.success('RESTAURANT ADDED!');
  }

  render() {
    const {restaurants} = this.props;
    return (
      <div className="container-fluid">
        <div>
          <HeaderImage
            mainTitle="Restaurants"
            secondaryTitle="My Reviews"
            />
          <div className="container">
            <RestaurantList
              restaurants = {restaurants}
            />
            {this.state.adding &&
              <RestaurantForm
                onSave = {this.saveRestaurant}
                />}
            {!this.state.adding && <input
              type="submit"
              value="ADD RESTAURANT"
              className="btn btn-primary center-block"
              onClick={this.showForm}
              />}
            <Footer />
          </div>
        </div>
    </div>
    );
  }
}

RestaurantsPage.propTypes = {
  restaurants: PropTypes.array.isRequired,
  adding: PropTypes.bool,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
      restaurants: state.restaurantReducer.restaurants
    };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(restaurantActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsPage);

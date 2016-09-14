import React, {PropTypes} from 'react';
import RestaurantList from './RestaurantsList';
import {connect} from 'react-redux';
import RestaurantForm from './RestaurantForm';
import toastr from 'toastr';
import HeaderImage from '../common/HeaderImage';
import Footer from '../common/Footer';

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

  saveRestaurant(event) {
    event.preventDefault();
    this.setState({adding: false});
    toastr.success('RESTAURANT ADDED!');
  }

  render() {
    const {restaurants} = this.props;
    return (
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
    );
  }
}

RestaurantsPage.propTypes = {
  restaurants: PropTypes.array.isRequired,
  adding: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
    return {
      restaurants: state.restaurantReducer.restaurants
    };
}

export default connect(mapStateToProps)(RestaurantsPage);

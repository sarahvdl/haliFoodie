import React, {PropTypes} from 'react';
import RestaurantList from './RestaurantsList';
import {connect} from 'react-redux';
import RestaurantForm from './RestaurantForm';
import toastr from 'toastr';

class RestaurantsPage extends React.Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
        restaurants: Object.assign({}, props),
        adding: false,
        saving: false
      };

      this.showForm = this.showForm.bind(this);
      this.saveRestaurant = this.saveRestaurant.bind(this);
  }

  showForm() {
    this.setState({adding:true});
  }

  saveRestaurant(event) {
    event.preventDefault();

    this.setState({saving:true});
  }

  redirect() {
    this.setState({saving: false, adding: false});
    toastr.success('Restaurant added');
}

  render() {
    const {restaurants} = this.props;
    return (
      <div>
        <RestaurantList
          restaurants = {restaurants}
        />
        {this.state.adding &&
          <RestaurantForm
            onSave = {this.saveRestaurant}
            saving = {this.state.saving}
            />}
        <input
          type="submit"
          value="ADD RESTAURANT"
          className="btn btn-primary center-block"
          onClick={this.showForm}
          />
        <footer>
            <div className="row">
                <div className="col-lg-12">
                    <p>Copyright &copy; SVDL 2016</p>
                </div>
            </div>
        </footer>
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

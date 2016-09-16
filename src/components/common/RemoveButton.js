import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class RemoveButton extends React.Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
        restaurant: props.restaurant,
        onClick: props.onClick
      };

      this.deleteHelper = this.deleteHelper.bind(this);
  }

  deleteHelper(event) {
    const result = confirm("Are you sure you want to remove this restaurant?");
    if (result) {
      this.state.onClick(event, this.state.restaurant);
    }
  }

  render() {
    return (
      <button className="btn btn-primary" onClick={this.deleteHelper}>REMOVE</button>
    );
  }
}

RemoveButton.propTypes = {
  restaurant: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {

  return {
    restaurant: ownProps.restaurant,
    onClick: ownProps.onClick
  };
}

export default connect(mapStateToProps)(RemoveButton);

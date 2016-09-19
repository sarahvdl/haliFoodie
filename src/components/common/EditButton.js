import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class EditButton extends React.Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
        restaurant: props.restaurant,
        onClick: props.onClick
      };

      this.editHelper = this.editHelper.bind(this);
  }

  editHelper(event) {
      this.state.onClick(event, this.state.restaurant);
  }

  render() {
    return (
      <button className="btn btn-primary" onClick={this.editHelper}>EDIT</button>
    );
  }
}

EditButton.propTypes = {
  restaurant: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {

  return {
    restaurant: ownProps.restaurant,
    onClick: ownProps.onClick
  };
}

export default connect(mapStateToProps)(EditButton);

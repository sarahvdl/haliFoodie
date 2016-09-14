//This component handles the App template used on every page
import React, {PropTypes} from 'react';
import Header from './common/Header';
import HomePage from './HomePage';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="nonHeader">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children : PropTypes.object.isRequired
};

export default connect()(App);

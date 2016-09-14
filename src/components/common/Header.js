import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <IndexLink to="/" className="navbar-brand">HF</IndexLink>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li><Link to="/restaurants">Restaurants</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

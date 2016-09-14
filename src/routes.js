import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import RestaurantsPage from './components/restaurant/RestaurantsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/contact/ContactPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="restaurants" component={RestaurantsPage} />
    <Route path="about" component={AboutPage} />
    <Route path="contact" component={ContactPage} />
  </Route>
);

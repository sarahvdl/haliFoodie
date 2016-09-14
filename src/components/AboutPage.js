import React from 'react';
import HeaderImage from './common/HeaderImage';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div>
          <HeaderImage
            mainTitle="About"
            secondaryTitle="Sharing My Love of Food"
            />
          <div className="container">
            <p>I made this page to kill two birds with one stone - 1) learn some cool web
            development tools and 2) spread my opinions on the Halifax food scene. </p>
          </div>
        </div>
    </div>
    );
  }
}

export default AboutPage;

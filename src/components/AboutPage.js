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
          <div className="container lead text-center">
            <p >I created this site to kill two birds with one stone:</p>
            <br></br>
            <p className="featurette-heading"><span className="glyphicon glyphicon-ok"></span> To learn some cool web development tools</p>
            <p className="featurette-heading"><span className="glyphicon glyphicon-ok"></span> To share my opinions on the Halifax food scene</p>
            <br></br>
            <p>I want to take the opposite approach of most review sites. </p>
            <p><b>Normally</b> there are many reviews for one restaurant all in the same place. <b>Instead</b> I envision users
            with profiles that have only their own ratings of restaurants.  The long term goal is to be able to follow users who have
            similar tastes in food as you do and have a news feed of the latest food reviews from the people that you follow.</p>
          </div>
        </div>
    </div>
    );
  }
}

export default AboutPage;

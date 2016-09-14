import React from 'react';
import HeaderImage from './common/HeaderImage';
import Footer from './common/Footer';

class HomePage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <HeaderImage
          mainTitle="Halifax Foodie"
          secondaryTitle="Exploring the Halifax Restaurant Scene"
          />

        <div className="container">
          <div className="featurette">
              <img src={require('../images/icecream.jpg')} className="featurette-image img-circle img-responsive pull-left"></img>
              <h2 className="featurette-heading">Restaurants and Pubs
                  <span className="text-muted"> around the city.</span>
              </h2>
              <p className="lead">Text text text text text.</p>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="featurette">
              <img src={require('../images/icecream.jpg')} className="featurette-image img-circle img-responsive pull-right"></img>
              <h2 className="featurette-heading">Takeaway and sit-ins
                  <span className="text-muted"> - the best of both.</span>
              </h2>
              <p className="lead">Text text text text text text.</p>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="featurette">
              <img src={require('../images/icecream.jpg')} className="featurette-image img-circle img-responsive pull-left"></img>
              <h2 className="featurette-heading">Cheap eats and expensive treats
                  <span className="text-muted"> - something something something</span>
              </h2>
              <p className="lead">Text text text text text.</p>
          </div>

          <Footer />
        </div>

      </div>
    );
  }
}

export default HomePage;

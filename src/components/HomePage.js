import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <div className="container-fluid">

        <header className="header-image">
            <div className="headline">
                <div className="container">
                    <h1>Halifax Foodie</h1>
                    <h3>Exploring the Halifax Restaurant Scene</h3>
                </div>
            </div>
        </header>

        <div className="container">
          <hr className="featurette-divider"></hr>

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

          <hr className="featurette-divider"></hr>

          <div className="featurette">
              <img src={require('../images/icecream.jpg')} className="featurette-image img-circle img-responsive pull-left"></img>
              <h2 className="featurette-heading">Cheap eats and expensive treats
                  <span className="text-muted"> - something something something</span>
              </h2>
              <p className="lead">Text text text text text.</p>
          </div>

          <br></br>
          <br></br>
          <footer>
              <div className="row">
                  <div className="col-lg-12">
                      <p>Copyright &copy; SVDL 2016</p>
                  </div>
              </div>
          </footer>

        </div>

      </div>
    );
  }
}

export default HomePage;

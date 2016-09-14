import React, {PropTypes} from 'react';

const HeaderImage = ({mainTitle, secondaryTitle}) => {
  return (
    <div>
      <header className="header-image">
          <div className="headline">
              <div className="container">
                  <span className="mainTitle">{mainTitle}</span>
                  <br></br>
                  <br></br>
                  <span className="secondaryTitle">{secondaryTitle}</span>
              </div>
          </div>
      </header>
      <br></br>
      <br></br>
    </div>
  );
};

HeaderImage.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  secondaryTitle: PropTypes.string.isRequired
};

export default HeaderImage;

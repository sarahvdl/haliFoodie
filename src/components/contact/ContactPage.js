import React from 'react';
import HeaderImage from '../common/HeaderImage';
import ContactForm from './ContactForm';

class ContactPage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <HeaderImage
          mainTitle="Contact"
          secondaryTitle="Share your thoughts!"
          />
        <div className="container">
          <ContactForm />


        </div>
      </div>
    );
  }
}

export default ContactPage;

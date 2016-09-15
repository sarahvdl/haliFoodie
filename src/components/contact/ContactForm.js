import React from 'react';
import TextInput from '../common/TextInput';
import CommentBox from '../common/CommentBox';

const ContactForm = () => (
  <div className="container-fluid">
    <form action="mailto:sarah.vanderlaan@ca.ey.com" method="post" encType="text/plain">
      <br></br>

      <TextInput
        name="name"
        label="Name:"
        />

      <TextInput
        name="email"
        label="E-mail:"
        />

      <CommentBox
        title="Comments:"
        />

      <input
        type="submit"
        value="Send"
        className="btn btn-primary"
        />
      &nbsp;&nbsp;&nbsp;
      <input
        type="reset"
        className="btn btn-primary"
        />
    </form>
  </div>
);

export default ContactForm;

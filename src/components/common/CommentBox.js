import React, {PropTypes} from 'react';

const CommentBox = ({title, onChange}) => (
  <div>
    <label>{title}</label>
    <br></br>
    <textarea
      name="comment"
      rows="10"
      cols="30"
      onChange={onChange}
      className="form-control"
      />
    <br></br>
    <br></br>
  </div>
);

CommentBox.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func
};

export default CommentBox;

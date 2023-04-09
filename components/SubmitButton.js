import React from 'react';

const SubmitButton = ({ onClick }) => {
  return (
    <button className="submit-button" onClick={onClick}>
      Submit
    </button>
  );
};

export default SubmitButton;

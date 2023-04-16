import React from 'react';

const ResponseDisplay = ({ data, error, loading }) => {
  let content;

  if (loading) {
    content = 'Loading...';
  } else if (error) {
    content = `Error: ${error.message}`;
  } else if (data) {
    content = data.result;
  } else {
    content = '';
  }

  return (
    <div className="response-display">
      <p>{content}</p>
    </div>
  );
};

export default ResponseDisplay;

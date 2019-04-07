import React from 'react';

const Error = (error) => {
  return (
    <div>
      <h4>fore!</h4>
      <p>there was an error:</p>
      <p>{error}</p>
      <p>please refresh</p>
    </div>
  );
}

export default Error;

import React from 'react';

const SecondaryAesthetic = ({ setSecondary }) => {
  return (
    <div>
      <h3>Current secondary aesthetic is Timeless.</h3>
      <button onClick={() => setSecondary("Timeless")}>Fashion</button>
    </div>
  );
};

export default SecondaryAesthetic;
import React from 'react';

function Confirmation ({accept, reject}) {

  return (
    <div>
      <button onClick={accept}>sim</button>
      <button onClick={reject}>não</button>
    </div>
  );
}
export default Confirmation;

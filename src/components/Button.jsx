import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button className={props.className} onClick={props.onClick}>
        catch the pokemon!
      </button>
    </div>
  );
};

export default Button;

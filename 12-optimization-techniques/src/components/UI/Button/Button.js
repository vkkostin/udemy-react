import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log('BUTTON RUNNING')
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// props change on every re-evaluation of App because onClick changes
export default React.memo(Button);

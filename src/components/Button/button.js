import React from 'react';

const button = props => (
  <button className={props.btncss}>
    <i className={props.iconName} />
    {props.name}
  </button>
);

export default button;
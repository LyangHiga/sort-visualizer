import React from 'react';
import Bar from './Bar';

export default function BarContainer(props) {
  return (
    <div className="arr-container">
      {props.arr.map((val, i) => (
        <Bar val={val} i={i} />
      ))}
    </div>
  );
}

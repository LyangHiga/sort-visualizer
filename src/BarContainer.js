import React from 'react';

export default function BarContainer(props) {
  return (
    <div className="arr-container">
      {props.arr.map((val, i) => (
        <div className="arr-bar" key={i} style={{ height: `${val}px` }}></div>
      ))}
    </div>
  );
}

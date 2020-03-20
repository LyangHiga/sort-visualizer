import React from 'react';

export default function Bar(props) {
  return (
    <div
      className="arr-bar"
      key={props.i}
      style={{ height: `${props.val}px` }}
    ></div>
  );
}

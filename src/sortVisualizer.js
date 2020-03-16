import React, { useState, useEffect } from "react";
import { randomIntFromInterval } from "./arrHelper";

export default function SortVisualizer(props) {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    resetArr();
    // empty brackets ensure the useEffect run only once
  }, []);

  const resetArr = () => {
    const newArr = [];
    for (let i = 0; i < 100; i++) {
      // 5 and 730 to fit in the screen
      // duplicated values are allowed
      newArr.push(randomIntFromInterval(5, 730));
    }
    setArr(newArr);
  };

  return (
    <div>
      <h1>Sort Visualizer</h1>
      {arr.map((val, i) => (
        <div className="arr-bar" key={i}>
          {val}
        </div>
      ))}
    </div>
  );
}

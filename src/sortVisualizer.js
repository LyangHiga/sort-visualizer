import React, { useState, useEffect } from "react";
import { randomIntFromInterval } from "./arrHelper";
import "./SortVisualizer.css";

export default function SortVisualizer(props) {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    resetArr();
    // empty brackets ensure the useEffect run only once
  }, []);

  const resetArr = () => {
    const newArr = [];
    for (let i = 0; i < 400; i++) {
      // 5 and 730 to fit in the screen
      // duplicated values are allowed
      newArr.push(randomIntFromInterval(5, 780));
    }
    setArr(newArr);
  };

  return (
    <div>
      <h1>Sorting Visualizer</h1>
      <div className="btns">
        <button onClick={() => resetArr()}>New Bars</button>
        <button>Merge Sort</button>
      </div>
      <div className="arr-container">
        {arr.map((val, i) => (
          <div className="arr-bar" key={i} style={{ height: `${val}px` }}></div>
        ))}
      </div>
    </div>
  );
}

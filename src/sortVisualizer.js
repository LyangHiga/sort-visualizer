import React, { useState, useEffect } from "react";
import { randomIntFromInterval, testSortingAlgorithms } from "./arrHelper";
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

  // check consective elements (arr[j],arr[j+1]) , if the arr[j] > arr[j+1] swap!
  // in each iterations we sort from the end
  const bubbleSort = arr => {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
      noSwaps = true;
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          noSwaps = false;
        }
      }
      if (noSwaps) break;
    }
    return arr;
  };

  return (
    <div>
      <h1>Sorting Visualizer</h1>
      <div className="btns">
        <button onClick={() => resetArr()}>New Bars</button>
        <button onClick={() => bubbleSort(arr)}>BubbleSort Sort</button>
        {/* choose wich method will be tested */}
        <button onClick={() => testSortingAlgorithms(bubbleSort)}>test</button>
      </div>
      <div className="arr-container">
        {arr.map((val, i) => (
          <div className="arr-bar" key={i} style={{ height: `${val}px` }}></div>
        ))}
      </div>
    </div>
  );
}

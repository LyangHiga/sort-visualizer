import React, { useState, useEffect } from 'react';
import { randomIntFromInterval, testSortingAlgorithms } from './arrHelper';
import './SortVisualizer.css';
import { changeAllColor } from './animations';

import { bubbleSort, insertionSort, selectionSort } from './algorithms';

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
    changeAllColor(arr.length, 'blue');
  };

  //  TODO Separe Sort Algorithms in new Components

  return (
    <div>
      <h1>Sorting Visualizer</h1>
      <div className="btns">
        <button onClick={() => resetArr()}>New Bars</button>
        <button onClick={() => bubbleSort(arr)}>BubbleSort Sort</button>
        <button onClick={() => selectionSort(arr)}>selectionSort Sort</button>
        <button onClick={() => insertionSort(arr)}>insertionSort Sort</button>
        {/* choose wich method will be tested */}
        <button onClick={() => testSortingAlgorithms(insertionSort)}>
          test
        </button>
      </div>
      <div className="arr-container">
        {arr.map((val, i) => (
          <div className="arr-bar" key={i} style={{ height: `${val}px` }}></div>
        ))}
      </div>
    </div>
  );
}

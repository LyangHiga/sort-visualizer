import React, { useState, useEffect } from 'react';
import { randomIntFromInterval, testSortingAlgorithms } from './arrHelper';
import './SortVisualizer.css';
import { changeAllColor } from './animations';
import Nav from './Nav';

export default function SortVisualizer(props) {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    resetArr();
    // empty brackets ensure the useEffect run only once
  }, []);

  const resetArr = () => {
    const newArr = [];
    for (let i = 0; i < 40; i++) {
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
      <Nav arr={arr} resetArr={resetArr}></Nav>
      <div className="arr-container">
        {arr.map((val, i) => (
          <div className="arr-bar" key={i} style={{ height: `${val}px` }}></div>
        ))}
      </div>
    </div>
  );
}

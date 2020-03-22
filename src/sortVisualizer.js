import React, { useState, useEffect } from 'react';
import { randomIntFromInterval } from './arrHelper';
import './SortVisualizer.css';
import { changeAllColor } from './animations';
import Nav from './Nav';
import BarContainer from './BarContainer';

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

  return (
    <div>
      <Nav arr={arr} resetArr={resetArr} setArr={setArr} />
      <BarContainer arr={arr} />
    </div>
  );
}

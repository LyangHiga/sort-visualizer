import React, { useState, useEffect } from 'react';
import { randomIntFromInterval } from './arrHelper';
import './SortVisualizer.css';
import { changeAllColor } from './animations';
import Nav from './Nav';
import BarContainer from './BarContainer';

const MARGIN = 100;
// bar size + bar margin
const BAR_SIZE = 4;

const MIN_HEIGHT = 5;
const NAV_HEIGHT = 200;

export default function SortVisualizer(props) {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    resetArr();
    // empty brackets ensure the useEffect run only once
  }, []);

  const resetArr = () => {
    const newArr = [];
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    console.log(height);
    const nbars = Math.floor((width - 2 * MARGIN) / BAR_SIZE);
    for (let i = 0; i < nbars; i++) {
      // 5 and 730 to fit in the screen
      // duplicated values are allowed
      newArr.push(randomIntFromInterval(MIN_HEIGHT, height - NAV_HEIGHT));
    }
    setArr(newArr);
    changeAllColor(arr.length, 'blue');
  };

  return (
    <div>
      <Nav arr={arr} resetArr={resetArr} />
      <BarContainer arr={arr} />
    </div>
  );
}

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
    for (let i = 0; i < 100; i++) {
      // 5 and 730 to fit in the screen
      // duplicated values are allowed
      newArr.push(randomIntFromInterval(5, 780));
    }
    setArr(newArr);
    changeColor(arr.length, "blue");
  };

  //   TODO Stop changing style this way, change class and re-render by useEffect

  const sleep = m => new Promise(r => setTimeout(r, m));

  const changeColor = (i, color) => {
    const arrBars = document.getElementsByClassName("arr-bar");
    for (let j = 0; j < i; j++) {
      const bar1 = arrBars[j].style;
      bar1.backgroundColor = color;
    }
  };

  async function selectionAnimation(i, j) {
    //   animate bar[i] and bar[j]
    const arrBars = document.getElementsByClassName("arr-bar");
    const bar1 = arrBars[i].style;
    const bar2 = arrBars[j].style;
    bar1.backgroundColor = "red";
    bar2.backgroundColor = "red";
    await sleep(1);
    bar1.backgroundColor = "blue";
    bar2.backgroundColor = "blue";
  }

  function last(i) {
    //   sorted intem in black
    const arrBars = document.getElementsByClassName("arr-bar");
    const bar1 = arrBars[i].style;
    bar1.backgroundColor = "black";
  }

  const swapAnimation = (i, j) => {
    const arrBars = document.getElementsByClassName("arr-bar");
    const bar1 = arrBars[i].style;
    let height1 = bar1.height;
    const bar2 = arrBars[j].style;
    let height2 = bar2.height;
    bar1.height = `${height2}`;
    bar2.height = `${height1}`;
  };

  //   Separe Sort Algorithms in new Components

  // check consective elements (arr[j],arr[j+1]) , if the arr[j] > arr[j+1] swap!
  // in each iterations we sort from the end
  //   some code is commented becaus of the animation, some changes are needed to use testSortingAlgorithms
  async function bubbleSort(array) {
    let noSwaps;
    for (let i = array.length; i > 0; i--) {
      noSwaps = true;
      for (let j = 0; j < i - 1; j++) {
        //   animate bars selected
        await selectionAnimation(j, j + 1);
        if (array[j] > array[j + 1]) {
          //   animate swap
          swapAnimation(j, j + 1);
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          noSwaps = false;
        }
      }
      last(i - 1);
      if (noSwaps) {
        changeColor(i - 1, "black");
        break;
      }
    }
    // return array;
  }

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

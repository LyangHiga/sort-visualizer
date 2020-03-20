import React from 'react';
import { bubbleSort, insertionSort, selectionSort } from './algorithms';
import { testSortingAlgorithms } from './arrHelper';

export default function Nav(props) {
  return (
    <div>
      <h1>Sorting Visualizer</h1>
      <div className="btns">
        <button onClick={() => props.resetArr()}>New Bars</button>
        <button onClick={() => bubbleSort(props.arr)}>BubbleSort Sort</button>
        <button onClick={() => selectionSort(props.arr)}>
          selectionSort Sort
        </button>
        <button onClick={() => insertionSort(props.arr)}>
          insertionSort Sort
        </button>
        {/* choose wich method will be tested */}
        <button onClick={() => testSortingAlgorithms(insertionSort)}>
          test
        </button>
      </div>
    </div>
  );
}

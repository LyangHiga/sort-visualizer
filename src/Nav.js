import React, { Fragment } from "react";
import bubbleSort from "./algorithms/bubbleSort";
import selectionSort from "./algorithms/selectionSort";
import insertionSort from "./algorithms/insertSort";
import mergeSort from "./algorithms/mergeSort";
import quickSort from "./algorithms/quickSort";
import radixSort from "./algorithms/radixSort";
import heapSort from "./algorithms/heapSort";
import { testSortingAlgorithms } from "./arrHelper";

import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styles from "./styles/NavStyles";

function Nav(props) {
  const classes = styles();
  async function handleClick(sort) {
    props.setDisable(true);
    await sort;
    props.setDisable(false);
  }

  const btnList = [
    { name: "New Bars", click: () => props.resetArr() },
    { name: "Bubble Sort", click: () => handleClick(bubbleSort(props.arr)) },
    {
      name: "Selection Sort",
      click: () => handleClick(selectionSort(props.arr)),
    },
    {
      name: "Insertion Sort",
      click: () => handleClick(insertionSort(props.arr)),
    },
    {
      name: "Merge Sort",
      click: () => handleClick(mergeSort(props.arr, 0, props.arr.length - 1)),
    },
    {
      name: "Quick Sort",
      click: () => handleClick(quickSort(props.arr)),
    },
    {
      name: "Radix Sort",
      click: () => handleClick(radixSort(props.arr)),
    },
  ];

  const buttons = (
    <Fragment>
      {btnList.map((btn) => (
        <Button
          key={`btn-${btn.name}`}
          className={classes.button}
          onClick={btn.click}
          disabled={props.disable}
        >
          {btn.name}
        </Button>
      ))}
    </Fragment>
  );
  // drawer
  return (
    <AppBar position="static" color="white" className={classes.Navbar}>
      <Toolbar>
        <Typography className={classes.title} variant="h6" color="inherit">
          Sorting Visualizer
        </Typography>
        <div className={classes.button}>{buttons}</div>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;

import React from "react";
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
  return (
    <AppBar position="static" color="white" className={classes.Navbar}>
      <Toolbar>
        <Typography className={classes.title} variant="h6" color="inherit">
          Sorting Visualizer
        </Typography>
        <div className={classes.button}>
          <Button
            className={classes.button}
            style={{ cursor: "pointer" }}
            onClick={() => props.resetArr()}
            disabled={props.disable}
          >
            New Bars
          </Button>
          <Button
            className={classes.button}
            onClick={() => handleClick(bubbleSort(props.arr))}
            disabled={props.disable}
          >
            Bubble Sort
          </Button>
          <Button
            className={classes.button}
            onClick={() => handleClick(selectionSort(props.arr))}
            disabled={props.disable}
          >
            Selection Sort
          </Button>
          <Button
            className={classes.button}
            onClick={() => handleClick(insertionSort(props.arr))}
            disabled={props.disable}
          >
            Insertion Sort
          </Button>
          <Button
            className={classes.button}
            onClick={() =>
              handleClick(mergeSort(props.arr, 0, props.arr.length - 1))
            }
            disabled={props.disable}
          >
            Merge Sort
          </Button>
          <Button
            className={classes.button}
            onClick={() => handleClick(quickSort(props.arr))}
            disabled={props.disable}
          >
            Quick Sort
          </Button>
          <Button
            className={classes.button}
            onClick={() => handleClick(radixSort(props.arr))}
            disabled={props.disable}
          >
            Radix Sort
          </Button>
          {/* <button className={classes.button} onClick={() => heapSort(props.arr)}>
            Heap Sort
          </button> */}
          {/* <button
            className={classes.button}
            onClick={() => testSortingAlgorithms()}
          >
            Test
          </button> */}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;

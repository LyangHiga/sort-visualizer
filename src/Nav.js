import React from 'react';
import bubbleSort from './algorithms/bubbleSort';
import selectionSort from './algorithms/selectionSort';
import insertionSort from './algorithms/insertSort';
import mergeSort from './algorithms/mergeSort';
import quickSort from './algorithms/quickSort';
import radixSort from './algorithms/radixSort';
import heapSort from './algorithms/heapSort';
import { testSortingAlgorithms } from './arrHelper';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './NavStyles';

function Nav(props) {
  const { classes } = props;
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
          <button
            className={classes.button}
            style={{ cursor: 'pointer' }}
            onClick={() => props.resetArr()}
            disabled={props.disable}
          >
            New Bars
          </button>
          <button
            className={classes.button}
            onClick={() => handleClick(bubbleSort(props.arr))}
            disabled={props.disable}
          >
            Bubble Sort
          </button>
          <button
            className={classes.button}
            onClick={() => handleClick(selectionSort(props.arr))}
            disabled={props.disable}
          >
            Selection Sort
          </button>
          <button
            className={classes.button}
            onClick={() => handleClick(insertionSort(props.arr))}
            disabled={props.disable}
          >
            Insertion Sort
          </button>
          <button
            className={classes.button}
            onClick={() =>
              handleClick(mergeSort(props.arr, 0, props.arr.length - 1))
            }
            disabled={props.disable}
          >
            Merge Sort
          </button>
          <button
            className={classes.button}
            onClick={() => handleClick(quickSort(props.arr))}
            disabled={props.disable}
          >
            Quick Sort
          </button>
          <button
            className={classes.button}
            onClick={() => handleClick(radixSort(props.arr))}
            disabled={props.disable}
          >
            Radix Sort
          </button>
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

export default withStyles(styles)(Nav);

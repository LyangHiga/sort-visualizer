import {
  changeAllColor,
  selectionAnimation,
  swapAnimation,
  sortedAnimation
} from './animations';

// check consective elements (arr[j],arr[j+1]) , if the arr[j] > arr[j+1] swap!
// in each iterations we sort from the end
//   some code is commented becaus of the animation, some changes are needed to use testSortingAlgorithms
export async function bubbleSort(array) {
  let noSwaps;
  for (let i = array.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      //   animate bars selected
      await selectionAnimation(j, j + 1, 'blue');
      if (array[j] > array[j + 1]) {
        //   animate swap
        swapAnimation(j, j + 1);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        noSwaps = false;
      }
    }
    sortedAnimation(i - 1);
    if (noSwaps) {
      changeAllColor(i - 1, 'black');
      break;
    }
  }
  return array;
}

// seach for the min in each iteration
// swap min to right position
export async function selectionSort(arr) {
  let min;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i; j < arr.length; j++) {
      await selectionAnimation(min, j, 'blue');
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
      swapAnimation(i, min);
    }
    sortedAnimation(i);
  }
  return arr;
}

// keep the left size sorted and insert intems from the right part in the right posistion
export async function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    for (var j = i - 1; j > -1 && current < arr[j]; j--) {
      await selectionAnimation(i, j, 'black');
      arr[j + 1] = arr[j];
      swapAnimation(j, j + 1);
    }
    arr[j + 1] = current;
    sortedAnimation(j + 1);
  }
  return arr;
}

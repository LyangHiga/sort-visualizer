import {
  selectionAnimation,
  swapAnimation,
  sortedAnimation
} from '../animations';

// keep the left size sorted and insert intems from the right part in the right posistion
export default async function insertionSort(arr) {
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

import {
  selectionAnimation,
  swapAnimation,
  sortedAnimation
} from '../animations';

// seach for the min in each iteration
// swap min to right position
export default async function selectionSort(arr) {
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

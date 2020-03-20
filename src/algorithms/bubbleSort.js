import {
  changeAllColor,
  selectionAnimation,
  swapAnimation,
  sortedAnimation
} from '../animations';

// check consective elements (arr[j],arr[j+1]) , if the arr[j] > arr[j+1] swap!
// in each iterations we sort from the end
//   some code is commented becaus of the animation, some changes are needed to use testSortingAlgorithms
export default async function bubbleSort(array) {
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

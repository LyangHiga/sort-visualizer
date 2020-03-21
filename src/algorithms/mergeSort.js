import {
  selectionAnimation,
  swapAnimation,
  sortedAnimation,
  changeAllColor
} from '../animations';

// REFERENCE
// https://www.geeksforgeeks.org/in-place-merge-sort/

// in place merge sort

// Merges two subarrays of arr.
// First subarray is arr[l..m]
//  Second subarray is arr[m+1..r]
async function merge(arr, start, mid, end) {
  let startRight = mid + 1;

  // If the direct merge is already sorted
  if (arr[mid] <= arr[startRight]) {
    return;
  }

  // Two pointers to maintain start of both arrays to merge
  while (start <= mid && startRight <= end) {
    // If element 1 is in right place
    if (arr[start] <= arr[startRight]) {
      await selectionAnimation(start, startRight);
      sortedAnimation(start);
      start += 1;
    } else {
      let value = arr[startRight];
      let index = startRight;

      //  Shift all the elements between element 1
      //  element 2, right by 1.
      while (index !== start) {
        arr[index] = arr[index - 1];
        swapAnimation(index, index - 1);
        sortedAnimation(index);
        index -= 1;
      }
      arr[start] = value;
      //  Update all the pointers
      start += 1;
      mid += 1;
      startRight += 1;
    }
    changeAllColor(startRight, 'black');
  }
}

// l is for left index and r is right index of the
// sub-array of arr to be sorted
export default async function mergeSort(arr, l, r) {
  if (l < r) {
    // Same as (l + r) / 2, but avoids overflow
    // for large l and r
    const m = Math.floor(l + (r - l) / 2);

    // Sort first and second halves
    await selectionAnimation(l, m, 'blue');
    await selectionAnimation(m + 1, r, 'blue');
    await mergeSort(arr, l, m);
    await mergeSort(arr, m + 1, r);

    await merge(arr, l, m, r);
  }
  return arr;
}

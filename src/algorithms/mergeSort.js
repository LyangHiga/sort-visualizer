// import { selectionAnimation, swapAnimation } from '../animations';

// REFERENCE
// https://www.geeksforgeeks.org/in-place-merge-sort/

// in place merge sort

// Merges two subarrays of arr.
// First subarray is arr[l..m]
//  Second subarray is arr[m+1..r]
function merge(arr, start, mid, end) {
  let startRight = mid + 1;

  // If the direct merge is already sorted
  if (arr[mid] <= arr[startRight]) return;

  // Two pointers to maintain start of both arrays to merge
  while (start <= mid && startRight <= end) {
    // If element 1 is in right place
    if (arr[start] <= arr[startRight]) start += 1;
    else {
      let value = arr[startRight];
      let index = startRight;

      //  Shift all the elements between element 1
      //  element 2, right by 1.
      while (index !== start) {
        arr[index] = arr[index - 1];
        index -= 1;
      }
      arr[start] = value;

      //  Update all the pointers
      start += 1;
      mid += 1;
      startRight += 1;
    }
  }
}

// l is for left index and r is right index of the
// sub-array of arr to be sorted
export default function mergeSort(arr, l, r) {
  let a = arr;
  if (l < r) {
    // Same as (l + r) / 2, but avoids overflow
    // for large l and r
    const m = l + (r - l) / 2;

    // Sort first and second halves
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);

    merge(arr, l, m, r);
  }
}

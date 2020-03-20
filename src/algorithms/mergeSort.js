import { selectionAnimation, swapAnimation } from '../animations';

const mergeIdx = (left, right, idx, idxLeft, idxRight) => {
  let result = [],
    leftIndex = 0,
    rightIndex = 0,
    k = 0;
  // while booth arrays have elements to compare, the smallest of each one,
  // take the smaller , push it to result and move idx
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      swapAnimation(idxLeft[leftIndex], idx[k]);
      leftIndex++;
      k++;
    } else {
      result.push(right[rightIndex]);
      swapAnimation(idxRight[rightIndex], idx[k]);
      rightIndex++;
      k++;
    }
  }
  // one of them still has elemenst, already sorted, so we just need concat it with the result array
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    swapAnimation(idxLeft[leftIndex], idx[k]);
    leftIndex++;
    k++;
  }
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    swapAnimation(idxRight[rightIndex], idx[k]);
    rightIndex++;
    k++;
    //   }
    // TODO return new idx
    return result;
  }
};

export default function mergeSort(arr, idx) {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const idxLeft = idx.slice(0, mid);
  const right = arr.slice(mid);
  const idxRight = idx.slice(mid);

  selectionAnimation(mid, idx[0], 'blue');
  selectionAnimation(mid, idx[idx.length - 1], 'blue');

  return mergeIdx(
    mergeSort(left, idxLeft),
    mergeSort(right, idxRight),
    idx,
    idxLeft,
    idxRight
  );
}

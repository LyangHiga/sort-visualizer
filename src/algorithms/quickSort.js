// returns start <= random < end
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// output: the index of the pivot
function partition(arr, start = 0, end = arr.length) {
  // lets take the first element as pivot
  // const p = arr[start];
  // random pivot
  const index = random(start, end);
  const p = arr[index];
  // swap pivot to the first position
  [arr[start], arr[index]] = [arr[index], arr[start]];

  // keep track of how many elements are smaller than the pivot, to mark its right position
  let i = start + 1;
  // elements with idx < j : partitioned
  // elements with idx > j unpartitioned
  for (let j = start + 1; j < end; j++) {
    // check if the next element is smaller than the pivot
    if (arr[j] < p) {
      // swap and move i
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  // put p in its right position and return this idx
  [arr[start], arr[i - 1]] = [arr[i - 1], arr[start]];
  return i - 1;
}

export default function quickSort(arr, left = 0, right = arr.length) {
  if (right - left < 1) return;
  // find the right position of a random pivot
  const p = partition(arr, left, right);
  // recurssive through p
  quickSort(arr, left, p - 1);
  quickSort(arr, p + 1, right);
  return arr;
}

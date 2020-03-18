export const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const arrAreEquals = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

export const testSortingAlgorithms = sortMethod => {
  // get 100 random arrays
  for (let i = 0; i < 100; i++) {
    const array = [];
    //   random length between 1 and 1000
    const length = randomIntFromInterval(1, 1000);
    for (let i = 0; i < length; i++) {
      array.push(randomIntFromInterval(-1000, 1000));
    }
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    const sortedArray = sortMethod(array.slice());
    console.log(arrAreEquals(javaScriptSortedArray, sortedArray));
  }
};

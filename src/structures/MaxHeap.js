import {
  swapAnimation,
  selectionAnimation,
  sortedAnimation
} from '../animations';
export default class MaxHeap {
  constructor() {
    this.values = [];
  }

  // return if the element from index i is greater than k idx element
  async greaterThan(i, k) {
    // out of bounds
    if (i < 0 || k < 0) return false;
    if (i > this.values.length - 1 || k > this.values.length - 1) return false;
    let val = this.values[i];
    let parent = this.values[k];
    await selectionAnimation(i, k, 'blue');
    if (val > parent) return true;
    return false;
  }

  // insert an element in the next free spot and then sort the Heap if it's needed
  async insert(val) {
    this.values.push(val);
    let idx = this.values.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    // sort
    while (await this.greaterThan(idx, parentIdx)) {
      //   await selectionAnimation(idx, parentIdx, 'blue');
      //swap
      swapAnimation(idx, parentIdx);
      [this.values[idx], this.values[parentIdx]] = [
        this.values[parentIdx],
        this.values[idx]
      ];
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
    return this;
  }

  // Remove the root (max), put the last element in the top and then rearrange
  // return the root and the new arrangement
  async remove() {
    // if is empty return undefined
    if (this.values.length === 0) return undefined;
    if (this.values.length === 1) {
      swapAnimation(0, this.values.length - 1);
      sortedAnimation(this.values.length - 1);
      return { element: this.values.pop(), heap: this };
    }
    const max = this.values[0];
    swapAnimation(0, this.values.length - 1);
    sortedAnimation(this.values.length - 1);
    // replace the root with the last element
    this.values[0] = this.values.pop();
    let idx = 0;
    let lChild = 2 * idx + 1;
    let rChild = 2 * idx + 2;
    let greatIdx;
    while (
      (await this.greaterThan(lChild, idx)) ||
      (await this.greaterThan(rChild, idx))
    ) {
      if (await this.greaterThan(lChild, rChild)) {
        greatIdx = lChild;
      } else {
        greatIdx = rChild;
      }
      // swap element from idx with greater
      [this.values[idx], this.values[greatIdx]] = [
        this.values[greatIdx],
        this.values[idx]
      ];
      swapAnimation(idx, greatIdx);
      // update idx and its children
      idx = greatIdx;
      lChild = 2 * idx + 1;
      rChild = 2 * idx + 2;
    }
    // swapAnimation(0, this.values.length - 1);
    // sortedAnimation(this.values.length - 1);
    return { element: max, heap: this };
  }
}

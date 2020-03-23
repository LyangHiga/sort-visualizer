import MaxHeap from '../structures/MaxHeap';
export default async function heapSort(arr) {
  let heap = new MaxHeap();
  //   async arr.map(val => {
  //     await heap.insert(val);
  //   });
  for (let i = 0; i < arr.length; i++) {
    await heap.insert(arr[i]);
  }
  //   await rearrange(heap.values, 'blue');
  while (heap.values.length > 0) {
    console.log(heap.values);
    await heap.remove();
  }
}

const heapSort = () => {
  // turn array into heap

  for (let hole = Math.floor(arr.length / 2) - 1; hole >= 0; hole--) {
    let holeTmp = hole;
    while (holeTmp * 2 + 1 < arr.length) {
      let minIndex = holeTmp * 2 + 1;
      if (minIndex + 1 < arr.length && arr[minIndex + 1] < arr[minIndex])
        minIndex = holeTmp * 2 + 2;

      if (arr[holeTmp] > arr[minIndex]) {
        let tmp = arr[holeTmp];
        arr[holeTmp] = arr[minIndex];
        arr[minIndex] = tmp;
        holeTmp = minIndex;
      } else {
        break;
      }
    }
  }
  // remove min
  // remove the top elemetn and replace it with the last elemetn and percolate it down;
  let sortedArr = [];

  for (let i = arr.length; i > 0; i--) {
    sortedArr.push(arr[0]);
    arr[0] = arr[arr.length - 1];
    arr.pop();
    let hole = 0;
    while (hole * 2 + 1 < arr.length) {
      let minIndex = hole * 2 + 1;
      if (minIndex + 1 < arr.length && arr[minIndex + 1] < arr[minIndex])
        minIndex = hole * 2 + 2;

      if (arr[hole] > arr[minIndex]) {
        let tmp = arr[hole];
        arr[hole] = arr[minIndex];
        arr[minIndex] = tmp;
        hole = minIndex;
      } else {
        break;
      }
    }
  }
  return sortedArr;
};

export default heapSort;

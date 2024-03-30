let arr = [2, 8, 1, 3, 5, 4, 6, 7];

const insertionSort = (arr) => {
  if (arr.length < 2) return arr;
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
      console.log(arr);
      j--;
    }
  }
  return arr;
};
console.log(insertionSort(arr));

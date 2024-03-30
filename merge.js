let arr = [2, 8, 1, 3, 5, 4, 6, 7, 9];

const merge = (arrL, arrR) => {
  let sortedArr = [];
  let arrLPointer = 0;
  let arrRPointer = 0;
  while (arrLPointer < arrL.length && arrRPointer < arrR.length) {
    if (arrL[arrLPointer] < arrR[arrRPointer]) {
      sortedArr.push(arrL[arrLPointer]);
      arrLPointer++;
    } else {
      sortedArr.push(arrR[arrRPointer]);
      arrRPointer++;
    }
  }
  if (arrLPointer < arrL.length) {
    for (let i = arrLPointer; i < arrL.length; i++) {
      sortedArr.push(arrL[i]);
    }
  }
  if (arrRPointer < arrR.length) {
    for (let i = arrRPointer; i < arrR.length; i++) {
      sortedArr.push(arrR[i]);
    }
  }
  return sortedArr;
};

const mergeSort = (arr) => {
  if (arr.length > 1) {
    let midPoint = Math.floor(arr.length / 2);
    let L = arr.slice(0, midPoint);
    let R = arr.slice(midPoint, arr.length);

    return merge(mergeSort(L), mergeSort(R));
  } else {
    return arr;
  }
};

console.log(mergeSort(arr));

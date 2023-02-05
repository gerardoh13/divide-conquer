const { findPivot, binarySearch } = require("./helpers");

function findRotatedIndex(arr, x) {
    if (arr.length === 1 && arr[0] !== x) return -1;
    let pivot = findPivot(arr);
    if (pivot > 0 && x >= arr[0] && x <= arr[pivot - 1]) {
      return binarySearch(arr, x, 0, pivot - 1);
    } else {
      return binarySearch(arr, x, pivot, arr.length - 1);
    }
  }

  module.exports = findRotatedIndex;

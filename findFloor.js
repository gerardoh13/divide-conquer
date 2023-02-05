function findFloor(arr, x, start = 0, end = arr.length - 1) {
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === x) return arr[mid];
      if (mid > 0 && arr[mid - 1] <= x && arr[mid] > x) return arr[mid - 1];
      if (mid === end && arr[mid] < x) return arr[mid];
      if (x < arr[mid]) end = mid - 1;
      else start = mid + 1;
    }
    return -1;
  }

  module.exports = findFloor;

function binarySearch(arr, x, start = 0, end = arr.length - 1) {
  if (x < arr[start] || x > arr[end]) return -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === x) return mid;
    if (x < arr[mid]) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}

// finds first x element in a sorted array
function findFirst(arr, x) {
  let start = 0;
  let end = arr.length - 1;
  if (x < arr[start] || x > arr[end]) return -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === x && (arr[mid - 1] !== x || mid === 0)) return mid;
    if (x > arr[mid]) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}

// finds last x element in a sorted array
function findLast(arr, x) {
  let start = 0;
  let end = arr.length - 1;
  if (x < arr[start] || x > arr[end]) return -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === x && (arr[mid + 1] !== x || mid === arr.length - 1))
      return mid;
    if (x >= arr[mid]) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}

function findPivot(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1]) return mid + 1;
    if (arr[mid] < arr[mid - 1]) return mid;
    if (arr[start] > arr[mid]) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}

module.exports = { binarySearch, findFirst, findLast, findPivot };

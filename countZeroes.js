
function countZeroes(arr) {
  let firstZero = findFirstZero(arr, 0);
  if (firstZero === -1) return 0;
  return arr.length - firstZero;
}

function findFirstZero(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === 0 && (arr[mid - 1] !== 0 || mid === 0)) return mid;
    if (arr[mid] !== 0) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}

module.exports = countZeroes;

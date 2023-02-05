const { findFirst, findLast } = require("./helpers");

function sortedFrequency(arr, x) {
    let first = findFirst(arr, x);
    if (first === -1) return first;
    let last = findLast(arr, x);
    return last - first + 1;
  }

  module.exports = sortedFrequency;

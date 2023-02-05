const { findPivot } = require("./helpers");

function findRotationCount(arr) {
    let res = findPivot(arr);
    if (res === -1) return 0;
    return res;
  }

  module.exports = findRotationCount;

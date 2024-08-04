/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
    let results = [];
    const MOD = 1e9 + 7;
    for (let i = 0; i < nums.length; i++) {
      let arr = nums.slice(i, nums.length + 1);
      for (let ii = i; ii < nums.length; ii++) {
        let arr2 = nums.slice(i, ii + 1).reduce((acc, num) => acc + num, 0);
        results.push(arr2);
      }
    }
    results = results.sort((a, b) => a - b);
    return  results.slice(left - 1, right).reduce((acc, num) => acc + num, 0)% MOD
  };
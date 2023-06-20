/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.copy = nums.slice();
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.copy;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const arr = this.copy.slice();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    // get a random number between i to end
    const rand = inclusiveRandom(i, len - 1);
    [arr[i], arr[rand]] = [arr[rand], arr[i]];
  }
  return arr;
};

// [n, m]
function inclusiveRandom(n, m) {
  return Math.floor(Math.random() * (m - n + 1)) + n;
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

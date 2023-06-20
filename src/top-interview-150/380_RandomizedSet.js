// O(1) 操作，使用 hash 记录 index
var RandomizedSet = function () {
  this.arr = [];
  this.map = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) {
    return false;
  }
  this.arr.push(val);
  const index = this.arr.length - 1;
  this.map.set(val, index);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) {
    return false;
  }
  // first, swap last element to val's position
  // then update index in map
  // last pop last one.
  // 只有 1 个元素时，有小坑，可能会导致删不掉，耽误很久。
  const index = this.map.get(val);
  const last = this.arr[this.arr.length - 1];
  this.arr[index] = last;
  this.map.set(last, index);
  this.arr.pop();
  this.map.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const len = this.arr.length;
  const index = Math.floor(Math.random() * len);
  return this.arr[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

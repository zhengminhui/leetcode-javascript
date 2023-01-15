/**
 * initialize your data structure here.
 * 时间 O(1) 空间 O(n)
 */
var MinStack = function () {
  this.stack = [];
  this.minStore = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  if (!this.stack) {
    this.stack = [];
    this.minStore = [];
  }
  this.stack.push(x);
  if (this.minStore.length === 0) {
    this.minStore.push(x);
  } else {
    const smaller = Math.min(this.minStore[this.minStore.length - 1], x);
    this.minStore.push(smaller);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.minStore.pop();
  return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.minStore[this.minStore.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.minVal = Number.POSITIVE_INFINITY;
  this.stack = [];
  this.len = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  if (x < this.minVal) {
    this.minVal = x;
  }
  this.stack.push(x);
  this.len += 1;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const item = this.stack.pop();
  if (item === this.minVal) {
    this.minVal = Math.min(...this.stack);
  }
  this.len -= 1;
  return item;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.len - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.minVal;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */

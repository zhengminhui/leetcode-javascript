/**
 * initialize your data structure here.
 */
// 初始一个超大的值最最小值，每次 push 新值，都和最小值比较一次
// 如果还是之前的最小值小，那就再 push 一个先前值，保持两个数组长度一致，
// 即使非最小值被 pop 出去，min_stack 也不用维护
var MinStack = function () {
  this.min_stack = [Number.POSITIVE_INFINITY];
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  const preMin = this.getMin();
  this.min_stack.push(Math.min(preMin, x));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.min_stack.pop();
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
MinStack.prototype.getMin = function () {
  return this.min_stack[this.min_stack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

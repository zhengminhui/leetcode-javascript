/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.minNum = Infinity;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  this.minNum = Math.min(x, this.minNum);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  var top = this.stack[this.stack.length - 1];
  this.stack.pop();
  if (top === this.minNum) {
    this.minNum = Math.min(...this.stack);
  }
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
  return this.minNum;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 * Test case
 * ["MinStack","push","push","push","getMin","pop","top","getMin"]
 * [[],[-2],[0],[-3],[],[],[],[]]
 * ["MinStack","push","push","top","getMin","pop","getMin","top"]
 * [[],[1],[2],[],[],[],[],[]]
 */
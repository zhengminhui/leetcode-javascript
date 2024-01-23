// 和实现 queue 一样。只是这次需要 temp 倒回到 stack 里，保持顺序。
var MyQueue = function () {
  this.stack = [];
  this.temp = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.stack.length) return undefined;

  while (this.stack.length !== 1) {
    this.temp.push(this.stack.pop());
  }
  const val = this.stack.pop();
  while (this.temp.length) {
    this.stack.push(this.temp.pop());
  }
  return val;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.stack[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

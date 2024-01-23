// queue implement stack
// 我先想的是queue shift 之后，把元素暂时存到 temp，再把 temp push 回 queue。
// 其实不用，这个时候只用互换 queue 和 temp, 速度更快。
var MyStack = function () {
  this.queue = [];
  this.temp = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (!this.queue.length) return undefined;

  while (this.queue.length !== 1) {
    this.temp.push(this.queue.shift());
  }
  const val = this.queue.shift();
  this.queue = this.temp;
  this.temp = [];
  return val;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue[this.queue.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

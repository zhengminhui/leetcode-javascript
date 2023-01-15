var CQueue = function () {
  this.inStack = [];
  this.outStack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  if (!this.inStack) {
    this.inStack = [];
  }
  this.inStack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  // 如果当前还有，则 outStack 只负责删，减少开销
  if (this.outStack.length) {
    return this.outStack.pop();
  }
  // 走到这里，说明 out 没有了， 检查 in，还有的话则进行一次转存
  // 把 in 里的元素pop 之后插入
  while (this.inStack.length) {
    this.outStack.push(this.inStack.pop());
  }
  // 最后检查转存
  return this.outStack.length ? this.outStack.pop() : -1;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

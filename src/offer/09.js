var CQueue = function () {
  this.stackIn = [];
  this.stackOut = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  if (!this.stackIn) {
    this.stackIn = [];
  }
  this.stackIn.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  // stackOut 只负责删，当执行删除操作时，把 in 里的元素pop 之后插入
  if (this.stackOut.length) {
    return this.stackOut.pop();
  } else {
    while (this.stackIn.length) {
      this.stackOut.push(this.stackIn.pop());
    }
    return this.stackOut.length ? this.stackOut.pop() : -1;
  }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

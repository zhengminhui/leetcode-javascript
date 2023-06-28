// 关键词，小于等于。连续。
// 翻译，从今天开始，往左数，小于等于的长度，包括当前。
var StockSpanner = function () {
  this.stack = [];
  // push 进一个[index, value] 初始组合
  this.index = -1;
  this.stack.push([this.index, Infinity]);
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  this.index++;
  // 如果新的 price 比栈顶的数值大，依次清空栈顶
  while (price >= this.stack[this.stack.length - 1][1]) {
    this.stack.pop();
  }
  // 否则计算距离差= 当前 index - 栈顶 index
  const res = this.index - this.stack[this.stack.length - 1][0];
  // 计算完成之后再 push 这对组合入栈
  this.stack.push([this.index, price]);
  return res;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

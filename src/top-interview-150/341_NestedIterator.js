/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
// 从尾到头遍历list，压入栈中
var NestedIterator = function (nestedList) {
  this.stack = [];
  for (let i = nestedList.length - 1; i >= 0; i--) {
    this.stack.push(nestedList[i]);
  }
};

// 如果栈顶是数字，ok，不用操作
// 如果栈顶是数组，要把数组拍平，再把数字塞回去，保证next能拿到整数。
NestedIterator.prototype.stackTopToInteger = function () {
  while (this.stack.length > 0) {
    const top = this.stack[this.stack.length - 1];
    if (top.isInteger()) {
      return;
    }
    this.stack.pop();
    const list = top.getList();
    for (let i = list.length - 1; i >= 0; i--) {
      this.stack.push(list[i]);
    }
  }
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  this.stackTopToInteger();
  return this.stack.length > 0;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  this.stackTopToInteger();
  const top = this.stack.pop();
  return top.getInteger();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;

  let cur = head;
  const newHead = new Node();
  let newCur = newHead;
  const map = new Map();

  // 遍历第一遍，把每个node保存hashmap
  while (cur) {
    newCur.val = cur.val;
    newCur.next = cur.next ? new Node() : null;
    // 保存 cur 和 newCur 的关系
    map.set(cur, newCur);
    // 继续向后
    cur = cur.next;
    newCur = newCur.next;
  }

  // 回头再来一遍，处理 random
  newCur = newHead;
  while (head) {
    // 检查 head.random 的指向存在与否，存在，就在 map 中获取
    // head.random, 就是之前  map.set 方法里的的 cur， 现在把它对应的哈希值取出来
    newCur.random = head.random ? map.get(head.random) : null;
    head = head.next;
    newCur = newCur.next;
  }

  return newHead;
};

function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

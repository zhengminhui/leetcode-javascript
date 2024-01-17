/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
// 类似两个链表合并，双指针，简单。
// 时间 O(n)， 空间 O(1)
var mergeAlternately = function (word1, word2) {
  let p1 = 0;
  let p2 = 0;
  let res = '';
  while (p1 < word1.length && p2 < word2.length) {
    res += word1[p1];
    p1++;
    res += word2[p2];
    p2++;
  }
  while (p1 < word1.length) {
    res += word1[p1];
    p1++;
  }
  while (p2 < word2.length) {
    res += word2[p2];
    p2++;
  }
  return res;
};

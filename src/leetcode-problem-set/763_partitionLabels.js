/**
 * @param {string} s
 * @return {number[]}
 */
// 题目的意思是同一个字母只能出现在一个片段里，
// 第一个 a 出现在第一段，所以自然而然就要去找最后一个 a 出现的位置。然后第一段就分好了。
// 要片数最多，就要保证每段最小，主体思路就是这样
var partitionLabels = function (s) {
  const last = new Array(26);
  const codePointA = 'a'.codePointAt(0);

  // 遍历字符串，记录下各个字符的最远 index。
  // 比如，str[0] 是 a，last[0] 是 65 - 65 = 0
  // str[1] 是 b，last[1] 是 66 - 65 = 1
  // str[2] 是 a，last[65 - 65 = 0] 被更新为 i = 2
  for (let i = 0; i < s.length; i++) {
    last[s.codePointAt(i) - codePointA] = i;
  }
  const partition = [];
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    // 获取当前字符串的最远位置，比如 s[0] = a , 是 8
    end = Math.max(end, last[s.codePointAt(i) - codePointA]);
    // 如果指针到了 end，就开始切割。
    if (end === i) {
      partition.push(end - start + 1);
      start = end + 1;
    }
  }
  return partition;
};

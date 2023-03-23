/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
//  dp -1 未计算，0 无法凑出，1 可以凑出
var wordBreak = function (s, wordDict) {
  const memo = new Array(s.length + 1).fill(-1);

  function dp(str, i) {
    // 走到最后了，找到了。
    if (str.length === i) {
      return true;
    }
    // 防止冗余计算，如果 memo[i] 计算过，查看他是不是0
    // 0 的话无法凑出，1 的话可以凑出。
    if (memo[i] !== -1) {
      return memo[i] === 1;
    }
    // 从第0 个字符开始遍历 str，每次增加 1 个长度
    for (let len = 1; i + len <= str.length; len++) {
      const prefix = str.substring(i, i + len);
      // 如果当前 prefix 在字典中存在，转换未可重复子问题。
      if (wordDict.indexOf(prefix) > -1) {
        const subProblem = dp(str, i + len);
        if (subProblem) {
          memo[i] = 1;
          return true;
        }
      }
    }
    memo[i] = 0;
    return false;
  }

  const res = dp(s, 0);
  console.log({ memo });
  return res;
};

// const s = 'catsandog';
// const wordDict = ['cats', 'dog', 'sand', 'and', 'cat'];
const s = 'leetcode';
const wordDict = ['leet', 'code'];
console.log(wordBreak(s, wordDict));

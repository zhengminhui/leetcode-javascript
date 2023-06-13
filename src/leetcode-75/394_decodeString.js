/**
 * @param {string} s
 * @return {string}
 */
// 左括号 push 数字和当前字符串，然后开始记录括号里的字符串
// 右括号 pop 出数字和 res，开始拼接。
var decodeString = function (s) {
  let res = '';
  const stack = [];
  let num = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (/[0-9]/.test(char)) {
      // 如果是数字，开始累加
      num = num * 10 + parseInt(char, 10);
    } else if (char === '[') {
      // 如果是左括号，stack 分别 push 进当前的res 和 次数
      // 然后需要重置之前的 num 和 res，下一步开始处理中括号里的内容
      stack.push(res);
      stack.push(num);
      res = '';
      num = 0;
    } else if (char === ']') {
      // 遇到右括号，可以开始执行 repeat
      // repeat 就是刚刚 push 进去的 num
      const repeat = stack.pop();
      const prevRes = stack.pop();
      res = prevRes + res.repeat(repeat);
    } else {
      // 如果是普通字符串，res 累加
      // 如果是括号内，同样的，累加保存到 res
      res += char;
    }
  }

  return res;
};

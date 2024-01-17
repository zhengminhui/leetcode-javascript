/**
 * @param {character[]} chars
 * @return {number}
 */
// 时间是 O(n), 空间 O(1)
var compress = function (chars) {
  let ptr = 0;
  let start = 0;

  for (let i = 0; i < chars.length; i++) {
    // 如果指针是最后一位，或者当前和下一位不相同，就可以开始写。
    if (i === chars.length - 1 || chars[i] !== chars[i + 1]) {
      // 先把这个字符记录到 ptr 位，然后 ptr 加 1， 准备写次数，次数是跨度 i - start + 1
      chars[ptr] = chars[i];
      ptr += 1;
      let num = i - start + 1;
      if (num > 1) {
        const anchor = ptr;
        while (num > 0) {
          chars[ptr] = '' + (num % 10);
          num = Math.floor(num / 10);
          ptr += 1;
        }
        // 为什么要 reverse，因为 12 依次对 10 取余，是 2，1，所以要反转成1，2
        reverse(chars, anchor, ptr - 1);
      }
      // 前面一个数处理完了，更新 start 位置。
      start = i + 1;
    }
  }
  return ptr;
};

const reverse = (chars, i, j) => {
  while (i < j) {
    const temp = chars[i];
    chars[i] = chars[j];
    chars[j] = temp;
    i++;
    j--;
  }
};

// const chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
const chars = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
console.log(compress(chars));

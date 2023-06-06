/**
 * @param {string} s
 * @return {string}
 */
// 注意题干，大小写都可能有
var reverseVowels = function (s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const arr = s.split('');
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (vowels.includes(arr[i]) && vowels.includes(arr[j])) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    } else if (!vowels.includes(arr[i])) {
      i++;
    } else if (!vowels.includes(arr[j])) {
      j--;
    }
  }
  return arr.join('');
};

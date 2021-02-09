/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  return s
    .trim()
    .split(" ")
    .filter((s) => s)
    .reverse()
    .join(" ");
};

// const s = "the sky is blue";
// const s = "  hello world!  ";
const s = "a good   example";
console.log(reverseWords(s));

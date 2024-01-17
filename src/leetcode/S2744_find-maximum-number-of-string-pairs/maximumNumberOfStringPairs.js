/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  const map = new Map();
  let res = 0;
  // generate hashmap for word:reverse_word key value
  // words like 'aa' 'bb' cannot have reverse string
  words
    .filter((w) => w[0] !== w[1])
    .forEach((w) => {
      const reverse = w.split('').reverse().join('');
      map.set(w, reverse);
    });

  for (let i = 0; i < words.length; i++) {
    const reverse = map.get(words[i]);
    if (map.has(reverse)) {
      // delete after use
      map.delete(reverse);
      res++;
    }
  }
  return res;
};

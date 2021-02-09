/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  // let res = 0;
  // const jewels = new Set(J.split(''));
  // for (let i=0; i< S.length;  i++) {
  //   if(jewels.has(S[i])) {
  //     res += 1;
  //   }
  // }
  // return res;

  return S.split('').filter(char => J.includes(char)).length;
};

/**
 * @param {number[]} A
 * @return {number[]}
 */
// Time O(n) Space O(1)
var sortArrayByParity = function(A) {
  let i = 0;
  let j = A.length - 1;
  while (i < j) {
    // odd number, swap with each other
    if (A[i] % 2) {
      if (A[j] % 2 === 0) {
        // even number, swap
        let temp = A[i];
        A[i] = A[j];
        A[j] = temp;
      } else {
        // odd number, pre pointer stay, latter pointer move left
        i--;
      }
      j--;
    }
    i++;
  }
  return A;
};

// Time O(n) Space O(n)
// var sortArrayByParity = function(A) {
//   const res = [];
//   A.forEach((num) => {
//     num % 2 ? res.push(num) : res.unshift(num);
//   })
//   return res;
// };

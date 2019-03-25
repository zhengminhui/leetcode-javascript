/**
 * 1. find the max;
 * 2. reverse 0 to max;
 * 3. move end pointer forward one step and once again
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function(A) {
  if (A.length < 2) return A;
  const res = [];
  let endIndex = A.length - 1;
  while (endIndex > 0) {
    const maxIndex = getMaxIndex(A, endIndex);
    if (maxIndex !== endIndex) {
      // swap between first and max
      swap(A, 0, maxIndex);
      // push the index to result array
      res.push(maxIndex + 1);
      // swap between first and last, put the max to the end
      swap(A, 0, endIndex);
      res.push(endIndex + 1);
    }
    endIndex--;
  }
  return res;
};

/**
 * get a slice of array which need to be flipped
 * return the index of max value of it
 * @param {*} A
 * @param {*} end
 */
var getMaxIndex = function(A, end) {
  const flipSlice = A.slice(0, end + 1);
  var maxValue = Math.max(...flipSlice);
  return flipSlice.indexOf(maxValue);
};

/**
 * in-place swap input array
 * @param {*} A
 * @param {*} start
 * @param {*} end
 */
var swap = function(A, start, end) {
  while (start < end) {
    const temp = A[start];
    A[start] = A[end];
    A[end] = temp;
    start++;
    end--;
  }
};

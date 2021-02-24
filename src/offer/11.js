/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let low = 0;
  let high = numbers.length - 1;
  while (low < high) {
    let mid = Math.floor(low + (high - low) / 2);
    console.log(numbers[low], numbers[mid], numbers[high]);
    if (numbers[mid] < numbers[high]) {
      high = mid;
    } else if (numbers[mid] > numbers[high]) {
      low = mid + 1;
    } else {
      high -= 1;
    }
  }
  return numbers[low];
};

// const n1 = [6, 7, 0, 1, 2, 3, 4, 5];
// console.log("n1", minArray(n1));
// const n2 = [4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3];
// console.log("n2", minArray(n2));
// const n3 = [0];
// console.log("n3", minArray(n3));
const n4 = [2, 2, 2, 2, 0];
console.log("n4", minArray(n4));

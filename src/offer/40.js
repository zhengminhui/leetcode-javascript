/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  if (!arr.length || !k) {
    return [];
  }
  const low = 0;
  const high = arr.length - 1;
  return quicksort(arr, low, high, k - 1);
};

function quicksort(arr, low, high, k) {
  if (low < high) {
    const pi = partition(arr, low, high);
    // 根据 index 和 k 的大小，判断是否需要继续排序左右。如果 k 小于 index，只用排左边，k 大于 index，只用排右边
    pi >= k ? quicksort(arr, 0, pi - 1, k) : quicksort(arr, pi + 1, high, k);
    return arr.slice(0, k + 1);
  }
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j <= high; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

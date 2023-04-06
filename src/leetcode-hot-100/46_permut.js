/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  const path = [];
  const used = [];

  backtracking(nums, path, used, res);
  return res;
};

function backtracking(nums, path, used, res) {
  if (path.length === nums.length) {
    res.push(Array.from(path));
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    // 如果遇到同支，则跳过。
    if (used[i]) continue;
    // 将当前字符储存到path
    path.push(nums[i]);
    // 标记走过的字符，表示同支
    used[i] = true;
    // 继续对接剩下的递归
    backtracking(nums, path, used, res);
    // 对当前数字使用完了，比如[1,2,3]中的1开头的组合，现在还在path 中，这个时候要清理掉，pop 出来，方便下一次push 2 进入path
    // 同理，used也要置为初始
    path.pop();
    used[i] = false;
  }
}

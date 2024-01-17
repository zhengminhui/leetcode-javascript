/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  const res = [];

  for (let i = 0; i < candies.length; i++) {
    res.push(candies[i] + extraCandies >= max);
  }

  return res;
};

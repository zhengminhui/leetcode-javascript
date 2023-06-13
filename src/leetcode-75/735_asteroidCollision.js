/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];
  let i = 0;
  while (i < asteroids.length) {
    const cur = asteroids[i];
    let ok = true;
    while (ok && stack.length && stack[stack.length - 1] > 0 && cur < 0) {
      // 不用 pop 出来比较，只用 peak 就行。
      const pre = stack[stack.length - 1];
      // 如果 pre 小于绝对值，不要了。
      if (pre <= -cur) {
        stack.pop();
      }
      // 如果 pre 大于绝对值，cur 就不要了，通过 boolean 来控制是否 push
      if (pre >= -cur) {
        ok = false;
      }
    }
    if (ok) {
      stack.push(cur);
    }
    i++;
  }
  return stack;
};

// const a = [10, 2, -5]; // [10]
const a = [8, -8]; // []
console.log(asteroidCollision(a));

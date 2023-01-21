const minArray = require('./11');

test('minArray mid < high', () => {
  const test = [6, 7, 0, 1, 2, 3, 4, 5];
  const ans = 0;
  expect(minArray(test)).toBe(ans);
});

test('minArray mid = high', () => {
  const test = [2, 2, 2, 2, 0, 1, 2];
  const ans = 0;
  expect(minArray(test)).toBe(ans);
});

test('minArray mid > high', () => {
  const test = [4, 5, 6, 7, 7, 0, 1, 2, 3];
  const ans = 0;
  expect(minArray(test)).toBe(ans);
});

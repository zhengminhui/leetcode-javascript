const constructArr = require('./69');

test('constructArr', () => {
  const test = [1, 2, 3, 4, 5];
  const ans = [120, 60, 40, 30, 24];
  expect(constructArr(test)).toStrictEqual(ans);
});

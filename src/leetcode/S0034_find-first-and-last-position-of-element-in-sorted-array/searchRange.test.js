const searchRange = require('./searchRange');

test('search range contains target', () => {
  const test = [5, 7, 7, 8, 8, 10];
  const target = 8;
  const res = [3, 4];
  expect(searchRange(test, target)).toStrictEqual(res);
});

test('search range does not contain target', () => {
  const test = [5, 7, 7, 8, 8, 10];
  const target = 6;
  const res = [-1, -1];
  expect(searchRange(test, target)).toStrictEqual(res);
});

test('empty array', () => {
  const test = [];
  const target = 0;
  const res = [-1, -1];
  expect(searchRange(test, target)).toStrictEqual(res);
});

test('array with 1 element', () => {
  const test = [1];
  const target = 1;
  const res = [0, 0];
  expect(searchRange(test, target)).toStrictEqual(res);
});

// test('array with 2 elements', () => {
//   const test = [1, 1];
//   const target = 1;
//   const res = [0, 1];
//   expect(searchRange(test, target)).toStrictEqual(res);
// });

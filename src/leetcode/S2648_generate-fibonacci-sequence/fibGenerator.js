/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let a = 0;
  let b = 1;
  yield a;
  yield b;
  while (true) {
    const fib = a + b;
    [a, b] = [b, fib];
    yield fib;
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

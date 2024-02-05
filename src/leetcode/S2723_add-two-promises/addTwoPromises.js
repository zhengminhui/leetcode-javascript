/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  // // use await is block, slower then all
  // const a = await promise1;
  // const b = await promise2;
  // return Promise.resolve(a+b);
  return Promise.all([promise1, promise2]).then((values) => {
    const sum = values.reduce((a, b) => a + b, 0);
    return sum;
  });
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

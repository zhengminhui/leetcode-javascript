/**
 * @param {number} millis
 * @return {Promise}
 */
// 注意返回一个 promise，满足可以 thenable
async function sleep(millis) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(millis);
    }, millis);
  });
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

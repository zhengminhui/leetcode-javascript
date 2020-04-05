const map = new Map();

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  const hash = Math.random().toString(32).substring(2);
  map.set(hash, longUrl);
  return `http://tinyurl.com/${hash}`;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  // array will ['http://tinyurl', 'hashValue']
  const hash = shortUrl.split('.com/')[1];
  return map.get(hash);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

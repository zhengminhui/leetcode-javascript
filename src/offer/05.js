/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
//   return s.replaceAll(" ", "%20");
  return s.replace(/ /g, "%20");
};

const s = "We are happy.";
console.log(replaceSpace(s));

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  if (moves.length === 0) {
    return true;
  }
  var uNum = 0;
  var dNum = 0;
  var lNum = 0;
  var rNum = 0;
  for (var i = 0; i < moves.length; i++) {
    if (moves[i] === 'U') {
      uNum++;
    } else if (moves[i] === 'D') {
      dNum++;
    } else if (moves[i] === 'L') {
      lNum++;
    } else {
      rNum++;
    }
  }
  return uNum === dNum && lNum === rNum;
};

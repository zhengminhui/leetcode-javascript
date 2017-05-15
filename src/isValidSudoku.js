/**
 * @param {character[][]} board
 * @return {boolean}
 * Use [i,curr], [curr,j], [i/3,j/3,curr] to save curr in three kind of situations, row, col, and box, Since '.' can be display several times, so check when curr is not '.'
 */
var isValidSudoku = function(board) {
    var seen = [],
        curr;
    for(var i=0;i< 9 ;i++){
        for (var j = 0; j< 9;j++){
            curr = board[i][j];
            if(curr !== '.'){
                if(containsEle(seen, [i,curr]) || 
                   containsEle(seen,[curr,j]) || 
                   containsEle(seen, [Math.floor(i/3),Math.floor(j/3),curr])) {
                return false;
                }
                seen.push([i,curr]);
                seen.push([curr,j]);
                seen.push([Math.floor(i/3),Math.floor(j/3),curr]);
            }
        }
    }
    return true;
};

var containsEle = function(arr, ele){
   var FLAG = false;
  for (var i = 0; i < arr.length; i++) {
    var cur = arr[i];
    if (cur.length !== ele.length) {
      continue;
    }
    for (var j = 0; j < ele.length; j++) {
      if (ele[j] !== cur[j]) {
        FLAG = false;
        break;
      }
      if (j === ele.length - 1) {
        FLAG = true;
      }
    }
    if (FLAG === true) {
      return FLAG;
    }
  }
  return false;
};
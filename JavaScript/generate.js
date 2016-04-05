/**
 * @param {number} numRows
 * @return {number[][]}
 * Use i to build each row, generate 2 dimension array, use j to iterate row.
 * Translate to Fibonacci Problem.
 */
var generate = function(numRows) {
    var res = [];
    for (var i = 0; i < numRows; i++) {
        var tmp = [];
        while (tmp.length < i + 1) {
            tmp.push(1);
        }
        res.push(tmp);
        for (var j = 1; j < i; j++) {
            res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
        }
    }
    return res;
};

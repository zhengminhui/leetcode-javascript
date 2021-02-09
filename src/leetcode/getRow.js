/**
 * @param {number} rowIndex
 * @return {number[]}
 * method 2: every time insert 1 in the front; then arr[j] = arr[j] + arr[j+1], iterate to the one before last.
 */
var getRow = function(rowIndex) {
    // var last = [1],
    //     res = [];
    // for (var i = 0; i < rowIndex; i++) {
    //     while (res.length <= i + 1) {
    //         res.push(1);
    //     }
    //     console.log(res);
    //     for (var j = 1; j < res.length - 1; j++) {
    //         res[j] = last[j - 1] + last[j];
    //     }
    //     last = res;
    //     res = [];
    // }
    // return last;

    var res = [1];
    for (var i = 0; i < rowIndex; i++) {
        res.unshift(1);
        for (var j = 1; j < res.length - 1; j++) {
            res[j] = res[j] + res[j + 1];
        }
    }
    return res;
};

console.log(getRow(4));

/**
 * @param {number} n
 * @return {string}
 * we need to construct (n-1)th string to build the desired string. So we'll start from the first string '1' save as oldStr. 
 */
var countAndSay = function(n) {
    var oldStr = '1',
        tmp,
        count;
    // i is the steps from '1' to desired string(if we want the 4th string, so we need (4-1) steps)
    for (var i = 0; i < n - 1; i++) {
        tmp = '';
        count = 1;
        // j is used to iterate the oldStr and check if previous two chars are the same, if true, update the count by increacing one, else concate new string with how many nums
        for (var j = 1; j < oldStr.length + 1; j++) {
            if (j < oldStr.length && oldStr[j] === oldStr[j - 1]) {
                count++;
            } else {
                countStr = count.toString();
                tmp += countStr + oldStr[j - 1];
                count = 1;
                // console.log('tmp is '+ tmp)
            }
        }
        oldStr = tmp;
    }
    return oldStr;
};
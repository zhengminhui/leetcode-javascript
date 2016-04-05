/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 * corner case: 1.3-1.2.4; 1.2-1.2.4; 01-1;
 * split two strings to arrays, and parseInt every number in case of (01, 0); then add 0 to each array to make their length are equal. Then use two pointers to iterate through.
 * Time O(n) Space O(n) 
 */
var compareVersion = function(version1, version2) {
    var arr1, arr2,
        i = 0,
        j = 0;
    arr1 = version1.split('.').map(function(x) {
        return parseInt(x) });
    arr2 = version2.split('.').map(function(x) {
        return parseInt(x) });
    var len1 = arr1.length,
        len2 = arr2.length;
    while (len1 > len2) {
        arr2.push(0);
        len1--;
    }
    while (len2 > len1) {
        arr1.push(0);
        len2--;
    }
    for (; i < arr1.length, j < arr2.length; i++, j++) {
        if (arr1[i] > arr2[j]) {
            return 1;
        } else if (arr1[i] < arr2[j]) {
            return -1;
        } else {
            continue;
        }
    }
    return 0;

};
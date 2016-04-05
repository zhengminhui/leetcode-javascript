/**
 * @param {number} num
 * @return {number[]}
 * methdo 1: iterate from 0 to num, counting 1 for each number
 * method 2: A number * 2 can treat as shift the binary left one bit. And the number of 1 are equal. So we can use this conclusion, if ith number is even, so the number of 1 is equal to (i/2)th. And if ith is odd, then number of 1 is equal to (i/2)th + 1; 
 */
var countBits = function(num) {
    // var res = [],
    //     count,
    //     n;
    // for(var i=0;i<=num;i++){
    //     count = 0;
    //     n = i;
    //     while (n!==0){
    //         n = n & (n - 1);
    //         count++;
    //     }
    //     res.push(count);
    // }
    // return res;

    // method 2
    var res = [0];
    for (var i = 1; i <= num; i++) {
        // res[i] = res[Math.floor(i/2)];
        // if(i%2 === 1) res[i]++;
        res[i] = res[i >> 1] + (i & 1); // Above two lines can write short as this
    }
    return res;

};
/**
 * @param {number} n
 * @return {number}
 * Sieve of Eratosthenes
 */
var countPrimes = function(n) {
    var res = [],
        ns = [],
        i, j;
    for (i = 0; i < n; i++) {
        ns.push(true);
    }
    // Loop's ending condition is i * i <= num instead of i <= sqrt(num)
    // to avoid repeatedly calling an expensive function sqrt().
    for (i = 2; i * i < n; i++) {
        if (!ns[i]) continue;
        for (j = i * i; j < n; j += i) {
            ns[j] = false;
        }
    }
    for (i = 2; i < n; i++) {
        if (ns[i]) {
            res.push(i);
        }
    }
    return res.length;
};

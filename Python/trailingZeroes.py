def trailingZeroes(n):
    """
    :type n: int
    :rtype: int
    """
    ans = 0
    while n:
        ans += n/5
        n /= 5
    return ans
 

def isPowerOfTwo(n):
    """
    :type n: int
    :rtype: bool
    """
    return n>0 and n&n-1 == 0
    

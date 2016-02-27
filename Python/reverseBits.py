def reverseBits(n):
    """
    :type n: int
    :rtype: int
    """
    rev = 0
    for i in range(n):
        rev <<= 1
        rev |= n & 1
        n >>= 1
    return rev
    
        


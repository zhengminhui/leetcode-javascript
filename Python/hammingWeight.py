def hammingWeight(n):
    """
    :type n: int
    :rtype: int
    """
    bin_s = bin(n)
    return bin_s.count('1')

    
        

def convertToTitle(n):
    """
    :type n: int
    :rtype: str
    """
    s = ''
    while n > 0:
        n -= 1
        s = chr(n%26 + 65) + s
        n /= 26
    return s
    
print convertToTitle(27)
        
    
        
        
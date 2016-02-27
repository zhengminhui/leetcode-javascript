def isHappy(n):
    """
    :type n: int
    :rtype: bool
    """    
    di = []
    while n not in di:
       di.append(n)
       s = 0
       while n > 0:
           r = n % 10
           s += r*r
           n = n / 10
       if s== 1:
           return True
       else:
           n = s    
    return False
     
print isHappy(7) 

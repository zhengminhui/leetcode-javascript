def myPow(x, n):
    """
    Implement pow(x, n).
    :type x: float
    :type n: int
    :rtype: float
    """
    if n == 0:
        return 1
    elif n < 0:
        return 1.0/myPow(x,-n)
    elif n%2==0:
        return myPow(x*x,n/2)
    else:
        return x*myPow(x,n-1)
        
print myPow(8.88023,3)
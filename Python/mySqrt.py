def mySqrt(x):
    """
    Implement int sqrt(int x).
    Compute and return the square root of x.
    :type x: int
    :rtype: int
    """
    if x<= 1:
        return x
    lob = 1
    hib = x
    ans = (lob+hib)/2
    while abs(ans*ans-x)>0.001:
        if ans*ans > x:
            hib = ans
        else:
            lob = ans
        ans = (lob +hib)/2.0
        print ans
    return int(ans)
    
 
print mySqrt(3) #1
print mySqrt(1) #1
     
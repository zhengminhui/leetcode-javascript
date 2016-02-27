def reverse(x):
    """
    :type x: int
    :rtype: int
    """
    ans = 0
    f =  x
    if x < 0:
        x= -x
    while x > 0:
       rem = x % 10 
       print rem
       ans = ans*10 + rem
       print ans
       x /= 10
    
    if ans > 2**31-1 or ans < -2**31+1:
        return 0
    if f < 0:
        ans = -ans
    else:
        return ans
        
print reverse(32768)

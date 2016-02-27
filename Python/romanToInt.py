def romanToInt(s):
    """
    :type s: str
    :rtype: int
    """
    di = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    ans = di[s[-1]]
    for i in range(0,len(s)-1):
        charP = s[i]
        charR = s[i+1]
        if di[charP]< di[charR]:
            ans -= di[charP]
        else:
            ans += di[charP]
    
    return ans

print romanToInt('VI')
        
        

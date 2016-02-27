def titleToNumber(s):
    """
    :type s: str
    :rtype: int
    """
    ans = 0
    digit = 0 
    while len(s) > 0 :
        ans += (ord(s[-1])-65+1)*26**digit
        s = s[:-1]
        digit+=1
    return ans
        
       
print titleToNumber('AAA')

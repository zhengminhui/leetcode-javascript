def reverseWords(s):
    """
    :type s: str
    :rtype: str
    """
    s = s.split()
    print s
    ans =''
    i = 0
    while i <len(s):
        ans += s[-1]
        s = s[0:-1]
        i+= 1
    return ans

print reverseWords('   a   b') 
        

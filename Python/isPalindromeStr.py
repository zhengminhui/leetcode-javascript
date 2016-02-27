def isPalindrome(s):
    """
    :type s: str
    :rtype: bool
    """
    #1
    #r = ''.join(ch for ch in s if ch.isalnum()).lower()
    #return r == r[::-1]

    #2
    rev = ''.join(ch for ch in s if ch.isalnum()).lower()
    l,r=0,len(rev)-1
    while l<=r:
        if rev[l] != rev[r]:
            return False
        l += 1
        r -= 1
    return True
    

            
    
    
    
print isPalindrome('A man, a plan, a canal: Panama')
print isPalindrome("a.b,.")

def longestPalindrome(s):
    """
    :type s: str
    :rtype: str
    """
    if len(s)<=1:
        return s
    ns = helper(s)
    MAX,index = 0,0
    for i in xrange(len(ns)-1):
        j = 0
        while ns[i+j] == ns[i-j]:
            j += 1
        j -= 1
        if j> MAX:
            MAX = j
            index = i
    ns = ns[index-MAX:index+MAX+1]
    ns = ns.replace('#','')
    return ns

        
def helper(s):
    ns = ''
    for i in xrange(len(s)):
        ns += s[i] + '#'
    return ns+' '



print longestPalindrome('abba')
        

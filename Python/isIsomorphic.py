def isIsomorphic(s, t):
    """
    :type s: str
    :type t: str
    :rtype: bool
    """
    di1,di2 = {},{}
    for i in xrange(len(s)):
        if s[i] in di1:
            di1[s[i]] += i
        else:
            di1[s[i]] = i
        if t[i] in di2:
            di2[t[i]] += i
        else:
            di2[t[i]] = i
    li1 = di1.values()
    li1.sort()
    li2 = di2.values()
    li2.sort()
    return li1 == li2
    
    

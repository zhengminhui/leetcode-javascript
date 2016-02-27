def strStr(haystack, needle):
    """
    :type haystack: str
    :type needle: str
    :rtype: int
    """
    #two pointer 44ms
    lh = len(haystack)
    le = len(needle)
    '''
    if not needle:
        return 0
    elif lh < ln:
        return -1
    for i in xrange(lh-ln+1):
        for j in xrange(ln):
            # not equal ,break and move pointer of hay right  
            if needle[j] != haystack[i+j]: 
                break
            else:
                # till needle[j] is the last char  
                if j == le-1:
                    return i
    return -1
    '''

    #slice 40ms
    for i in xrange(lh-ln+1):
        if needle== haystack[i:i+ln]:
            return i
    return -1
        
        
        
    



            
        
        
    


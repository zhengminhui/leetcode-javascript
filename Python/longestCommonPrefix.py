import os
def longestCommonPrefix(strs):
    """
    :type strs: List[str]
    :rtype: str
    """
    '''
    # os.path 44ms
    return os.path.commonprefix(strs)
    '''

    # slicing 80ms
    if not strs:
        return ''
    ms = min(strs)
    for i in xrange(len(ms)):
        for item in strs:
            if ms[i] != item[i]:
                return ms[:i] if i>0 else ''
    return ms
    

    

print longestCommonPrefix(['shanghai','shuibiao','shubiao'])

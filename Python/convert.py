def convert(s, numRows):
    """
    :type s: str
    :type numRows: int
    :rtype: str
    """
    '''
    if numRows <= 1:
        return s
    lines = ['' for i in xrange(numRows)]
    index,step = 0,1
    for i in s:
        lines[index] += i
        index += step
        if index ==0 or index == numRows -1:
            step = -step
    return ''.join(lines)
        '''
    if numRows == 1:
        return s
    res, gap = "", 2*(numRows-1)
    for i in xrange(numRows):
        tmp = i
        while tmp < len(s):
            res += s[tmp]
            # special cases 
            if i != 0 and i != numRows-1: 
                if tmp+gap-2*i < len(s):
                    res += s[tmp+gap-2*i]
            tmp += gap
            print tmp
        print res
    return res
        
    
    
print convert('0123456789',3)

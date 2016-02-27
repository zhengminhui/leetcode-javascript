def generate(numRows):
    """
    :type numRows: int
    :rtype: List[List[int]]
    """
    li = []
    for i in xrange(numRows):
        li += [[1]*(i+1)]
        for j in xrange(1,i):
            li[i][j] = li[i-1][j-1]+li[i-1][j]
    return li
    
    
print generate(3)

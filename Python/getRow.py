def getRow(rowIndex):
    """
    :type rowIndex: int
    :rtype: List[int]
    """
    '''
    # from right to left 48ms
    res = []
    for i in range(rowIndex+1):
        res.append(1)
        #range(start,end,step)
        for j in range(i,0,-1):
            if j==i:
                res[j]=1
                print j,res
            else:
                res[j] += res[j-1]
        print i,res
    return res


    '''
    #from left to right
    res = [1 for _ in xrange(rowIndex+1)]
    for i in xrange(2, rowIndex+1):
        pre = res[0]
        for j in xrange(1, i):
            cur = res[j]
            res[j] += pre
            pre = cur
    return res
  


    

print getRow(3)

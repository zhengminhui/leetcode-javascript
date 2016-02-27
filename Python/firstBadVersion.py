def firstBadVersion(self, n):
    """
    :type n: int
    :rtype: int
    """
    if n <= 1:
        return n
    lob = 1
    hib = n
    ans = lob+(hib-lob)/2
    while lob<hib:
        if isBadVersion(ans):
            hib = ans-1
            if(not isBadVersion(ans-1)):
                break
        else:
            lob = ans+1
        ans = lob+(hib-lob)/2.0
    return int(ans)
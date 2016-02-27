def countPrimes(n):
    """
    :type n: int
    :rtype: int
    """
    if n<= 2:
        return 0
    res = [True]*n
    res[0]= res[1]= False
    i = 2
    while i*i < n:
        if res[i]:
            res[i*i:n:i] = [False]*len(res[i*i:n:i])
        i += 1
    return sum(res)

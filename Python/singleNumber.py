def singleNumber(nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    '''
    method 1 
    dic = {}
    for item in nums:
        dic[item] = dic.get(item,0) + 1
    for key, val in dic.items():
        if val == 1:
            return key
    '''

    # bit manipunation
    res = 0
    for n in nums:
        res ^= n
        print n,res
    return res
    
        
 
    
        
    
    
    
    

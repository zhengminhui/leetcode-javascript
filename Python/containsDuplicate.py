def containsDuplicate(nums):
    """
    :type nums: List[int]
    :rtype: bool
    """
    '''
    di = {}
    for i in nums:
        if i in di:
            return True
        else:
            di[i] = 1
    return False
    '''
    s_nums = set(nums)
    return len(s_nums) != len(nums)
    

def removeDuplicates(nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    if not nums:
        return 0
    '''
    nums = list(set(nums[:]))
    print nums 
    return len(nums)
    '''
    newTail = 0
    for i in xrange(1,len(nums)):
        if nums[i] != nums[newTail]:
            newTail += 1
            nums[newTail] = nums[i]
    print nums
    return newTail + 1
        
    

print removeDuplicates([1,1,2])

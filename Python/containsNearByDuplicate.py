def containsNearbyDuplicate(nums, k):
    """
    :type nums: List[int]
    :type k: int
    :rtype: bool
    """
    di = {}
    for i in xrange(len(nums)):
        print di
        if nums[i] in di:
            index = di.get(nums[i])
            print i,index
            if i- index <= k:
                return True
        di[nums[i]] = i
    return False
        
    
print containsNearbyDuplicate([1,2,1],0)
print containsNearbyDuplicate([1,2,1],1)
print containsNearbyDuplicate([-1,-1],1)
print containsNearbyDuplicate([1,0,1,1],1)

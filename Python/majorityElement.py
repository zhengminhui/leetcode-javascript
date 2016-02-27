def majorityElement(nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    #di = {}
    #for item in nums:
    #    if item not in di:
    #        di[item] = 1
    #    else:
    #        di[item] += 1
    #items = di.items()
    #backitems = [ [v[1],v[0]] for v in  items ]
    #backitems.sort()
    #backitems.reverse()
    #return backitems[0][1]
    
    #method 2
    nums.sort()
    return nums[len(nums)/2]
    


    

    
        
    
    

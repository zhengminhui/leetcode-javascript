def summaryRanges(nums):
    """
    :type nums: List[int]
    :rtype: List[str]
    """
    ans = []
    x,size= 0,len(nums)
    while x< size:
        c =  x
        r = str(nums[x])
        while x +1 < size and nums[x+1]-nums[x]==1:
            x += 1
        if x > c:
            r += '->' + str(nums[x])
        ans.append(r)
        x+= 1
    return ans
            
    
    
    
print summaryRanges([0,1,2,4,5,7,8])

def rotate(nums, k):
    """
    :type nums: List[int]
    :type k: int
    :rtype: void Do not return anything, modify nums in-place instead.
    """
    l = len(nums)
    nums[:] = nums[l-k:]+nums[0:l-k]
    print nums


print rotate([1,2,3,4,5,6,7],4)
print rotate([1,2],0)  #[1,2]
print rotate([1],0)  #[1]
print rotate([1,2],1) #[2,1]  
    
        

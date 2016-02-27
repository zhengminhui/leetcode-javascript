def moveZeroes(nums):
    """
    :type nums: List[int]
    :rtype: void Do not return anything, modify nums in-place instead.
    """
    count = 0
    for n in nums[:]:
        if n == 0:
            nums.remove(0)
            count += 1
    nums += [0]*count
        

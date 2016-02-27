def rob(nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if not nums:
            return 0
        if len(nums)<=2:
            return max(nums)
        a,b = nums[0],max(nums[0],nums[1])
        for i in xrange(2,len(nums)):
            tmp = b
            b = max(nums[i]+a, b)
            a = tmp
        return b
        

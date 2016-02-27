class Solution(object):
    def maxProduct(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums) == 0:
            return 0
        maxPre = minPre = maxNew = nums[0]
        for i in xrange(1,len(nums)):
            maxHere = max(max(maxPre*nums[i], minPre*nums[i]), nums[i])
            minHere = min(min(maxPre*nums[i], minPre*nums[i]), nums[i])
            maxNew = max(maxHere, maxNew) #compare current max and storaged max value
            maxPre = maxHere
            minPre = minHere
        return maxNew
            

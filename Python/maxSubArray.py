class Solution(object):
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        Time Complexity:O(n) Space Complexity O(1)
        Kadane's Algorithm
        DP method: Keeping compare between maxPre plus currenty number and current number,
        get the larger one, and then campare to recorded max value,
        update that max value, and finally update maxPre.
        """
##        if not nums: return 0
        maxHere = maxSoFar = nums[0]
        for i in nums[1:]:
            maxHere = max(i, maxHere + i)
            maxSoFar = max(maxHere, maxSoFar)
        return maxSoFar
        

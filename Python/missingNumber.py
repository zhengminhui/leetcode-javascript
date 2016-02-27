class Solution(object):
    def missingNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        Method 1: Time Complexity O(n), for other languages, may cause overflow for very large numbers. Use arithmetic series to calculate the summation.
        Method 2: Time Complexity O(logn), suit for the list already sorted
        Method 3: Time Complexity O(n), won't overflow
        
        """
        # method 1
        # n = len(nums)
        # return (n*(n+1)/2) - sum(nums)
        
        # method 2
        # nums.sort()
        # lo = 0
        # hi = len(nums)
        # mid = (lo+hi)/2
        # while lo < hi:
        #     mid = (lo+hi)/2
        #     if nums[mid] > mid:
        #         hi = mid
        #     else:
        #         lo = mid + 1
        # return lo
                
        # method 3
        n = len(nums)
        for i in xrange(n):
            n ^= i
            n ^= nums[i]
        return n
        
        

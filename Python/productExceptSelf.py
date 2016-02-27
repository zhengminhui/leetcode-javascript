class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        Algo Complexity: O(n)
        If there is more than one 0 in the list, the answer should be all 0s. 
        And if there is none zero, we just calculate the whole production and devide coresponding num.
        If there is one zero in the list, we can get the index of zero. Only the number at that index has non-zero value, others should be zeros.
        """
        if not nums:
            return []
        prd = 1
        ans = [0]*len(nums)
        if nums.count(0) > 1:
            return ans
        if nums.count(0) == 1:
            index = nums.index(0)
            for i in nums:
                if i != 0:
                    prd *= i
            ans[index] = prd
        else:
            for i in nums:
                prd *= i
            for i in xrange(len(nums)):
                ans[i] = prd/nums[i]
        return ans
        
        

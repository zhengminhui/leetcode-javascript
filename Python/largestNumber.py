class Solution(object):
    def largestNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: str
        Time Complexity: O(nlogn)
        In case of [0,0,0], we should first convert to int and finally print as string
        """
        nums = map(str, nums)
        nums.sort(cmp = lambda a,b: cmp(a+b, b+a), reverse = True)
        return str(int(''.join(nums))) 
       

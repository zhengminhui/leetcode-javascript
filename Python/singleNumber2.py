def singleNumber(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    Time complexity O(n) Space complexity O(1)
    """
    
    # ones, twos, threes = 0,0,0
    # for n in nums:
    #     twos |= ones & n
    #     ones ^= n
    #     threes = ones & twos
    #     ones &= ~threes
    #     twos &= ~threes
    # return ones
    
    ones, twos = 0,0 
    for n in nums:
        ones = (ones ^ n) & ~twos
        twos = (twos ^ n) & ~ones
    return ones

import operator


def singleNumber(nums):
    """
    :type nums: List[int]
    :rtype: List[int]
    """
    xor, a = 0, 0
    for n in nums:
        xor ^= n
    bit = xor & -xor
    for n in nums:
        if n & bit:
            a ^= n
    return [a, xor ^ a]

# shorter version of method 2
#     xor = reduce(operator.xor, nums)
#     ans = reduce(operator.xor, filter(lambda x: x & xor & -xor, nums))
#     return [ans, xor ^ ans]

print singleNumber([0, 0, 1, 1, 2, 4])

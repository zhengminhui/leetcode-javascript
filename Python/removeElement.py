def removeElement(nums, val):
    """
    :type nums: List[int]
    :type val: int
    :rtype: int
    """
    for n in nums[:]:
        if n == val:
            nums.remove(n)
    return len(nums)


print removeElement([8], 7)

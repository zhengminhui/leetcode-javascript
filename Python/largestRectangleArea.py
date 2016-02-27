def largestRectangleArea(height):
    """
    :type height: List[int]
    :rtype: int
    """
    if not height: return 0
    n = len(height)
    height.append(0)
    maxArea = 0
    for i in xrange(0,n+1):
        j = i - 1
        while j>=0 and height[j] > height[i]:
            maxArea = max(maxArea, height[j] * (i - j))
            height[j] = height[i]
            j -= 1
    return maxArea


print largestRectangleArea([4,5,6,4])
    

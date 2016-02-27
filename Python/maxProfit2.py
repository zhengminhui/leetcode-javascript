def maxProfit(prices):
    """
    :type prices: List[int]
    :rtype: int
    Time Complexity O(n) Space Complexity O(1)
    """
    return sum([max(prices[i+1] - prices[i], 0) for i in xrange(len(prices) - 1)])

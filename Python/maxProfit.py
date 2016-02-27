def maxProfit(prices):
    """
    :type prices: List[int]
    :rtype: int
    Time Complexity O(n)  Space Complexity O(1)
    Iterate the list, if next num smaller than current buy,
    assign it as new buy. keep comparing stored profit and new profit,
    save larger one as final result. 
    """
    if not prices: return 0
    buy = prices[0]
    profit = 0

    for i in xrange(1,len(prices)):
        if prices[i] < buy:
            buy = prices[i]
        profit = max(profit, prices[i] -buy)
    return profit
            
        
        
print maxProfit([1,2,0,4,5])
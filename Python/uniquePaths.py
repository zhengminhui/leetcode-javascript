class Solution(object):
    def uniquePaths(self, m, n):
        """
        :type m: int
        :type n: int
        :rtype: int
        Time Complextity: O(mn)
        Space Complextity: O(n)
        """
        
##        # math
##        return math.factorial(m+n-2) / (math.factorial(m-1)*math.factorial(n-1))
        
        # DP
        dp = [1]*n
        for i in xrange(1,m):
            for j in xrange(1,n):
                dp[j] += dp[j-1]
        return dp[-1]
        

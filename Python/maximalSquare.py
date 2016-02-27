class Solution(object):
    def maximalSquare(self, matrix):
        """
        :type matrix: List[List[str]]
        :rtype: int
        Algo Complexity O(mn) Space Complexity O(mn)
        For DP part, check every bottom right cell which equals to 1, and return the min value of his left, top, left top cell and add 1 to this value. That is the edge length of this square. Finally return the square of this value.
        """
        
        
        # if not matrix:return 0
        # mval = 0
        # m,n = len(matrix),len(matrix[0])
        # dp = [[0]*n for i in range(m)]
        # for i in xrange(m):
        #     for j in xrange(n):
        #         dp[i][j] = int(matrix[i][j])
        #         if dp[i][j] and i and j:
        #             dp[i][j] = min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])+1
        #         mval = max(dp[i][j],mval)
        # return mval**2
        
        # more pythonic way
        mv = 0
        for i,r in enumerate(matrix):
            r = matrix[i] = map(int,r)
            for j, c in enumerate(r):
                if i*j*c:
                    r[j] = min(matrix[i][j-1],matrix[i-1][j],matrix[i-1][j-1]) +1
                mv = max(mv,r[j])
        return mv**2
                    
        
        

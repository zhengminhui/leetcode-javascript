def generateParenthesis(n):
        """
        :type n: int
        :rtype: List[str]
        """
        if not n:
            return []
        left,right,ans = n,n,[]
        dfs(n,n,ans,'')
        return ans
        
        
def dfs(left, right, ans, string):
        if left:
            print 'open' 
            dfs(left -1 ,right, ans, string+'(')
        if right>left:
            print 'close'
            dfs(left, right - 1, ans, string+')')
        if not left and not right:
            print 'add',string
            ans.append(string) 
            return

                

def climbStairsRecur(n):
        # write your code here
        if n == 1:
            return 1
        elif n == 2:
            return 2
        else:
            return climbStairsRecur(n-1)+climbStairsRecur(n-2)
            
            
def climbStairsIter(n):
        # write your code here
        if n <= 2:
            return n
        fib = 2
        fibPre = 1
        for i in range(2,n):
            temp = fib
            fib = fib + fibPre
            fibPre = temp
        return fib
        
print climbStairsIter(4)
print climbStairsRecur(4)
class Solution(object):
    def multiply(self, num1, num2):
        """
        :type num1: str
        :type num2: str
        :rtype: str
        """
        # return str(int(num1)*int(num2))
        
        product = [0]*(len(num1)+len(num2))
        pos = len(product) - 1 
        
        for i in reversed(num1):
            tmp = pos
            for j in reversed(num2):
                product[tmp] += int(i) * int(j)
                product[tmp - 1] += product[tmp] / 10
                product[tmp] = product[tmp] % 10
                tmp -= 1
            pos -= 1
        
        ptr = 0
        while ptr < len(product)-1 and product[ptr] ==0:
            ptr += 1
        
        return "".join(map(str,product[ptr:]))
            
                
data = Solution()
print data.multiply("123","456")

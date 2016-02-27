def countAndSay(n):
    """
    :type n: int
    :rtype: str
    """
    oldStr = '1'
    for i in range(n -1):
        
        tmp = ''
        
        count = 1
        
        for j in range(1,len(oldStr)+1):
            if j<len(oldStr) and oldStr[j] == oldStr[j -1]:
                count += 1
            else:
                tmp += str(count) + oldStr[j-1]
                count = 1
        oldStr = tmp
    return oldStr
            
        



print countAndSay(3)  
#print countAndSay(4)  #1211
#print countAndSay(5)  #111221

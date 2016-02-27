def myAtoi(str):
    """
    :type str: str
    :rtype: int
    """
    MAX = 2**31-1
    MIN = -2**31
    str=str.strip()
    if not str:
        return 0
    sign, i = 1,0
    if str[0] == '+':
        i+=1
    elif str[0] == '-':
        sign = -1
        i += 1
    ans = 0
    while i < len(str):
        if not str[i].isdigit():
            break
        ans = ans * 10 + ord(str[i])-ord('0')
        if ans > 2**31-1:
            break
        i += 1
    return min(max(ans*sign,MIN),MAX)
        
    
    
print myAtoi('-')

def addDigits(num):
    '''
    :type num: int
    :rtype: int
    '''
    # Digital Root Definition
    if num ==0:
        return 0
    else:
        return 1 + (num-1)%9
    
    '''
    #Method2
    if num == 0:
        return num
    elif num%9 == 0:
        return 9
    else:
        return num%9
    '''
    '''
    #Method3
    sum = 0
    if num<10:
        return num
    while num>0:
        sum += num %10
        num /= 10
    return addDigits(sum)
        '''
        
    

    
print addDigits(19)
print addDigits(11)
print addDigits(38)
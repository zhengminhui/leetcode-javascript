def addBinary(a, b):
    """
    :type a: str
    :type b: str
    :rtype: str
    """
    #method 1
    #return bin(int(a,2)+int(b,2))[2:]
    #method 2
    return bin(eval('0b'+a + '0b' +b))[2:]

    
print addBinary('11','1')
        
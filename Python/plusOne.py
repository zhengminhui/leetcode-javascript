def plusOne(digits):
    """
    :type digits: List[int]
    :rtype: List[int]
    """
    s = ''
    for i in digits:
        s += str(i)
    int_s = int(s)
    res = int_s + 1
    li = []
    for i in str(res):
        li.append(int(i))
    return li
    
print plusOne([0])
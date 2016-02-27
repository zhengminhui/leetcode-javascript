def isValid(s):
    """
    :type s: str
    :rtype: bool
    """
    left, right, stack= "({[", ")}]", []
    for item in s:
        if item in left:
            stack.append(item)
        elif not stack or left.find(stack.pop()) != right.find(item):
            return False
    return not stack


print isValid("(")

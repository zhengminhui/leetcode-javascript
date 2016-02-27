def lengthOfLastWord(s):
    """
    :type s: str
    :rtype: int
    """
    li = s.split()
    return len(li[-1]) if li else 0
        

print lengthOfLastWord("Hello World")
print lengthOfLastWord("  ")

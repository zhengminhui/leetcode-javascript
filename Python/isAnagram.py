def isAnagram(s, t):
    """
    :type s: str
    :type t: str
    :rtype: bool
    """
    #return sorted(s)==sorted(t)
    di1, di2 = {},{}
    for char in s:
        if char in di1:
            di1[char] += 1
        else:
            di1[char] = 1
    for char in t:
        if char in di2:
            di2[char] += 1
        else:
            di2[char] = 1
    return di1==di2
            
    

print isAnagram('a','a')

print isAnagram('aacc','ccac')

print isAnagram('rat','car')

print isAnagram('anagram','nagaram')

from collections import defaultdict 
def groupAnagrams(strs):
    """
    :type strs: List[str]
    :rtype: List[List[str]]
    """
    dic = {}
    for s in strs:
        dic[tuple(sorted(s))] = dic.get(tuple(sorted(s)),[]) + [s]
    return [sorted(item) for item in dic.values()]



        
    


print groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])

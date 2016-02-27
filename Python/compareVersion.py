def compareVersion(version1, version2):
    """
    :type version1: str
    :type version2: str
    :rtype: int
    """
    v1 = [int(x) for x in version1.split('.')]
    v2 = [int(x) for x in version2.split('.')]
    l1,l2=len(v1),len(v2)
    v1 += [0]*(l2-l1)
    v2 += [0]*(l1-l2)
    if v1 > v2:
        return 1
    elif v2 > v1:
        return -1
    else:
        return 0
    
  
 

#print compareVersion('01','1')
#print compareVersion('1','1.1')
print compareVersion('1.0.0','1')
    
        

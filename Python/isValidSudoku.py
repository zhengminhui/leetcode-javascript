def isValidSudoku(board):
    """
    :type board: List[List[str]]
    :rtype: bool
    """
    '''
    #method 1
    seen = ()
    for i, row in enumerate(board):
        for j,curr in enumerate(row):
            if curr != '.':
                seen += (i,curr),(curr,j),(i/3,j/3,curr)
    return len(seen) == len(set(seen))
    '''


    #method 2
    seen = set()
    for i in xrange(9):
        for j in xrange(9):
            curr = board[i][j]
            if curr != '.':
                if (i,curr) in seen or (curr,j) in seen or (i/3,j/3,curr) in seen:
                    return False
                seen.add((i,curr))
                seen.add((curr,j))
                seen.add((i/3,j/3,curr))
    return True
    
    
    

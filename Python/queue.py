class Queue(object):
    def __init__(self):
        """
        initialize your data structure here.
        """
        self.stack = []
        self.size = 0
        

    def push(self, x):
        """
        :type x: int
        :rtype: nothing
        """
        stk = []
        for _ in xrange(self.size):
            stk.append(self.stack.pop())
        self.stack.append(x)
        for _ in xrange(self.size):
            self.stack.append(stk.pop())
        self.size += 1
        

    def pop(self):
        """
        :rtype: nothing
        """
        self.stack.pop()
        self.size-=1
        

    def peek(self):
        """
        :rtype: int
        """
        return self.stack[-1]
        
        

    def empty(self):
        """
        :rtype: bool
        """
        return self.size == 0
        

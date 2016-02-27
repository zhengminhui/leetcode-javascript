class Stack(object):
    def __init__(self):
        """
        initialize your data structure here.
        """
        self.stack = collections.deque()
        self.size = 0

    def push(self, x):
        """
        :type x: int
        :rtype: nothing
        """
        self.stack.append(x)
        self.size += 1
        

    def pop(self):
        """
        :rtype: nothing
        """
        for i in xrange(len(self.stack)-1):
            self.stack.append(self.stack.popleft())
        self.stack.popleft()
        self.size -= 1
        

    def top(self):
        """
        :rtype: int
        """
        return self.stack[-1]
        

    def empty(self):
        """
        :rtype: bool
        """
        return self.size == 0
        

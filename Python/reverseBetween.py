# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def reverseBetween(self, head, m, n):
        """
        :type head: ListNode
        :type m: int
        :type n: int
        :rtype: ListNode
        """
        dummy = pre = ListNode(0)
        dummy.next = head
        # part 1
        for _ in xrange(m-1):
            pre = pre.next
        # part 2
        curr = pre.next
        node = None
        for _ in xrange(n+1 -m):
            nxt = curr.next
            curr.next = node
            node = curr
            curr = nxt
        pre.next.next = curr
        pre.next = None
        return dummy.next
            
        

# Definition for singly-linked list.
class ListNode(object):
     def __init__(self, x):
         self.val = x
         self.next = None

class Solution(object):
    def getIntersectionNode(self, headA, headB):
        """
        :type head1, head1: ListNode
        :rtype: ListNode  
        """
        m = self.getSize(headA)
        n = self.getSize(headB)

        if m<n:
            return self.getIntersectionNode(headB,headA)

        for i in xrange(m-n):
            headA = headA.next

        while headA and headB:
            if headA.val == headB.val:
                return headA
            headA = headA.next
            headB = headB.next

        return None

    def getSize(self,head):
        n = 0
        while head:
            head = head.next
            n += 1
        return n
            
        
        
        
        

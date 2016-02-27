# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def hasCycle(self, head):
        """
        :type head: ListNode
        :rtype: bool
        :Algo Complexity O(n)
        Create two pointer, slow moves one step per time and fast moves two steps.
        If there is a end, the fast pointer should encounter None, otherwise, there is
        an cycle in the linked list. So the fast pointer will catch up the slow pointer.
        
        """
        if not head:
            return False
        dummy = fast = slow = ListNode(0)
        dummy.next = head
        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next
            if slow.val == fast.val:
                return True
        return False
                
        

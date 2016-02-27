# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution(object):
    def deleteDuplicates(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        cur= head
        while cur and cur.next:
            if cur.val == cur.next.val:
                cur.next = cur.next.next
            else:
                cur = cur.next
        return head

        # method 2 use dict
        dic = {}
        cur = head
        while cur:
            dic[cur.val] = dic.get(cur.val, 0) + 1
            cur = cur.next
        cur = head
        while cur:
            tmp = cur
            for _ in xrange(dic[cur.val]):
                tmp = tmp.next
            cur.next = tmp
            cur = cur.next
        return head
        
        

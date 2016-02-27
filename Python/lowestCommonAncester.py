# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def lowestCommonAncestor(self, root, p, q):
        """
        :type root: TreeNode
        :type p: TreeNode
        :type q: TreeNode
        :rtype: TreeNode
        """
        if not root:
            return 
        # p and q are on the different side of root,
        # or at least one of them is root
        if (root.val-p.val)*(root.val-q.val)<=0:
            return root
        # both p and q are on the left side of root
        elif root.val > p.val and root.val > q.val:
            return self.lowestCommonAncestor(root.left, p, q)
        # both p and q are on the right side of root
        else:
            return self.lowestCommonAncestor(root.right, p, q)

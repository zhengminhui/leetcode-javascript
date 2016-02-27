class Solution(object):
    def reverseWords(self, s):
        """
        :type s: str
        :rtype: str
        """
        ns = s.split()
        ns.reverse()
        space = " "
        return space.join(ns)


a = Solution()
print a.reverseWords("the sky is blue")

//Write a function that reverses a string. The input string is given as an array of characters s.

//You must do this by modifying the input array in-place with O(1) extra memory

class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        l = 0
        r = len(s)-1

        while(l < r):
            s[l], s[r]=s[r],s[l]
            l,r = l + 1, r - 1
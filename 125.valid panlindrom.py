//A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

//Given a string s, return true if it is a palindrome, or false otherwise.

import re

class Solution:
    def isPalindrome(self, s: str) -> bool:
        clean = re.sub(r'[^a-zA-Z0-9]', '', s)
        s = clean.lower()
        l=0
        r= len(s)-1

        while(l < r):
            if(s[l] != s[r]):
                return False
            else:
                l = l + 1
                r = r-1
        return True
//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for i in s:
            if i == '{' or i == '[' or i == '(':
                    stack.append(i)
            elif i == '}' and stack and stack[-1] == '{':
                    stack.pop()
            elif i == ']' and stack and stack[-1] =='[':
                    stack.pop()
            elif i == ')' and stack and stack[-1] == '(':
                    stack.pop()
            else:
                    return False
        return len(stack) == 0

            
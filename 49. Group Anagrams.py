//Given an array of strings strs, group the anagrams together. You can return the answer in any order.
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
         anagrams = defaultdict(list)


         for i in strs:
            key = "".join(sorted(i))
            anagrams[key].append(i)
         return list(anagrams.values()) 
 

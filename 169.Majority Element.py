﻿//Given an array nums of size n, return the majority element.

//The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
    def majorityElement(self, nums: List[int]) -> int:
        count = 1
        res = nums[0]
        for i in nums[1:]:
            if res == i:
                count += 1
            else:
                if count == 0:
                    res =i
                    count += 1
                else:
                    count -= 1
        return res
        

  
 
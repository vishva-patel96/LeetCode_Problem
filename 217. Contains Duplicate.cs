//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

public class Solution
{
    public bool ContainsDuplicate(int[] nums)
    {

        HashSet<int> hs = new HashSet<int>();
        for (int i = 0; i < nums.Length; i++)
        {
            hs.Add(nums[i]);
        }
        return hs.Count != nums.Length;
    }
}
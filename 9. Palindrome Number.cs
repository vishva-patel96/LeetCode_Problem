public class Solution
{
    public bool IsPalindrome(int x)
    {
        if (x == 0)
        {
            return true;
        }
        if (x < 0 || x % 10 == 0)
        {
            return false;
        }


        int reverse = 0;

        while (x > reverse)
        {
            int reminder = x % 10;
            reverse = (reverse * 10) + reminder;
            x = x / 10;
        }

        if (x == reverse || x == reverse / 10)
        {
            return true;
        }
        else
        {
            return false;
        }

    }

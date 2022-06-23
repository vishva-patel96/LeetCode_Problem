public class Solution
{
    public bool IsValid(string s)
    {
        Stack<int> stack = new Stack<int>();


        for (int i = 0; i < s.Length; i++)
        {
            if (s[i] == '{' | s[i] == '[' | s[i] == '(')
            {
                stack.Push(i);
            }
            else if (stack.Count == 0)
            {
                return false;
            }
           else if(s[i] == ')')
            {
                if(stack.Peek().ToString() == "(")
                {
                    stack.Pop();
                }
                else
                {
                    return false;
                }
            }
           else if(s[i] == '}')
            {
                if(stack.Peek().ToString()=="{")
                {
                    stack.Pop();
                }
                else
                {
                    return false;
                }
            }
            else if (s[i]==']')
            {
                if(stack.Peek().ToString()=="[")
                {
                    stack.Pop();
                }
                else
                {
                    return false;
                }
            }
                  
         }
        if(stack.Count==0)
        {
            return true;    
        }
        else
        {
            return false;
        }
    }
    public static void Main(string[]  args)
    {
       Solution myObj =new Solution();
       string s = "()";
       
    }
}
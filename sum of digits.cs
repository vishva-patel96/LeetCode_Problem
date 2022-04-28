
//Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.


using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    public class Number

    {
        public static void Main(string [] args)
        {
            Console.WriteLine("enter number:");
            int number = int.Parse(Console.ReadLine());
            int result = 0, reminder;


            while(number > 0)
            {
                reminder = number % 10;
                number = number / 10;
                result = result+reminder;
            }
          
           Console.WriteLine(result);
        }
    }
}

//input 16 --> 1 + 6 = 7

//You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.


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
            int[] arr = new int[]{ 2, 4, 0, 10, 4, 11, 36 };

            int [] even = new int []{};
            int[] odd =new int[] {};
            for(int i=0; i<arr.Length; i++)
            {
                if (i % 2== 0)
                {
                    even.Append(arr[i]);
                }
                else
                {
                    odd.Append(arr[i]);
                }
            }
            if (even.Length ==1)
            {
                Console.WriteLine(even[0]);
            }
            else
            {
                Console.WriteLine(odd[0]);
            }
        }
    }
}

//[2, 4, 0, 100, 4, 11, 2602, 36]
//Should return: 11(the only odd number)
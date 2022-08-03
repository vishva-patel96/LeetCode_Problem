public class test
{
    public int x = 22;
    public  int y = 23;
    public readonly int z = 24;

    public test ()
    {
        x = 55;
        y = 999;
        z = 0000;
       
    }
    public test(int p1, int p2, int p3)
     {
        x=p1;
        y=p2;   
        z=p3;
     }
    public static void Main()
    {

        test p2 = new test();
        p2.x = 8777;
        p2.y = 77;
        //cannot add z value, because it's readonly
        Console.WriteLine($"p2: x={p2.x}, y={p2.y}, z={p2.z}");
    }
}
// output : 8777, 77 , 0
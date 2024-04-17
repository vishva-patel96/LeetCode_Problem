var runningSum = function (nums) {
  let ans = new Array(nums.lenght);
  ans[0] = nums[0];
  for (let i = 1; i < nums.lenght; i++)

    ans[i] = nums[i] + ans[i - 1];
  return ans;




};
runningSum([1, 2, 3]);




// using Map 
var runningSum = function (nums) {
let ans = 0;
  
  ans = nums.map(x => ans += x)
  console.log(ans);
};
runningSum([1, 2, 3]);

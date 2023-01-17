var pivotIndex = function (nums) {
  let totalsum = 0;
  let leftsum = 0;

  for (let i = 0; i < nums.length; i++)
    totalsum += nums[i];
  //console.log(totalsum);

  for (let j = 0; j < nums.length; j++) {
    if (totalsum - leftsum - nums[j] === leftsum) {
      console.log(j);
    }
    leftsum += nums[j];
  }
  console.log(-1);
      

};
pivotIndex([1, 7, 3, 6, 5, 6]);
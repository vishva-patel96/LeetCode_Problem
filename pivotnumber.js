var pivotIndex = function (nums) {
  let totalsum = 0;
  let leftsum = 0;

  for (let i = 0; i < nums.length; i++)
    totalsum += nums[i];
  //console.log(totalsum);

  for (let j = 0; j < nums.length; j++) {
    if (totalsum - leftsum - nums[j] === leftsum) {
      return j;
    }
    leftsum += nums[j];
  }
  return -1;
      

};
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));

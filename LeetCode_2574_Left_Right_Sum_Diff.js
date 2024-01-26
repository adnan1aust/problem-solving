/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  if (nums.length === 1) return [0];
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < nums.length; i++) {
    rightSum += nums[i];
  }
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];
    result.push(Math.abs(leftSum - rightSum));
    leftSum += nums[i];
  }

  return result;
};

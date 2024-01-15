/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let i = 0;
  let j = n;
  let res = [];
  while (j < 2 * n) {
    res.push(nums[i]);
    res.push(nums[j]);
    i++;
    j++;
  }
  return res;
};

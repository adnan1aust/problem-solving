/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let res = [];
  if (nums.length === 0) return res;
  let i = 0;
  let cur = null;
  while (i < nums.length) {
    if (nums[i] + 1 !== nums[i + 1] && cur !== null) {
      res.push(`${nums[cur]}->${nums[i]}`);
      cur = null;
    } else if (nums[i] + 1 !== nums[i + 1] && cur === null) {
      res.push(`${nums[i]}`);
      cur = null;
    } else if (cur === null) {
      cur = i;
    }
    i++;
  }
  return res;
};

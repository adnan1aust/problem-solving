/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = -1;
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > max) {
      max = candies[i];
    }
  }
  for (let i = 0; i < candies.length; i++) {
    candies[i] = candies[i] + extraCandies >= max;
  }
  return candies;
};

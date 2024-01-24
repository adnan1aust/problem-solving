/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const hMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = hMap[s[i]];
    const next = hMap[s[i + 1]];
    if (cur < next) {
      res += next - cur;
      i++;
    } else {
      res += cur;
    }
  }
  return res;
};

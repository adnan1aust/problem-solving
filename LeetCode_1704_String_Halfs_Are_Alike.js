/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const hMap = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
    A: "A",
    E: "E",
    I: "I",
    O: "O",
    U: "U",
  };
  const n = s.length;
  let i = 0;
  let j = n / 2;
  let c1 = 0;
  let c2 = 0;
  while (i < n / 2 && j < n) {
    if (s[i] in hMap) {
      c1++;
    }
    if (s[j] in hMap) {
      c2++;
    }
    i++;
    j++;
  }
  return c1 === c2;
};

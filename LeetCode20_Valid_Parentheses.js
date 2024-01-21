/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  const res = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      res.push(s[i]);
    } else {
      if (
        (res[res.length - 1] === "(" && s[i] === ")") ||
        (res[res.length - 1] === "{" && s[i] === "}") ||
        (res[res.length - 1] === "[" && s[i] === "]")
      ) {
        res.pop();
      } else {
        return false;
      }
    }
  }
  if (res.length !== 0) return false;
  return true;
};

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const obj = {};
  const l1 = magazine.length;
  const l2 = ransomNote.length;

  if (l1 < l2) return false;
  if (ransomNote === magazine) return true;

  for (let i = 0; i < l1; i++) {
    if (obj[magazine[i]]) {
      obj[magazine[i]] = obj[magazine[i]] + 1;
    } else {
      obj[magazine[i]] = 1;
    }
  }

  for (let i = 0; i < l2; i++) {
    if (obj[ransomNote[i]]) {
      obj[ransomNote[i]] = --obj[ransomNote[i]];
    } else {
      return false;
    }
  }
  return true;
};

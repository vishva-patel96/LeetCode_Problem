// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let str1 = "";
  let str2 = "";
  for (let i = 0; i < s.length; i++) {
    str1 = s.indexOf(s[i]);
    str2 = t.indexOf(t[i]);

    if (s[str2] !== s[i] || t[str1] !== t[i]) {
      return false;
    }
  }

  return true;
};

var isSubsequence = function (s, t) {
  let sPoint = 0;

  for (let i = 0; i < t.length; i++) {

    if (s[sPoint] === t[i]) {
      sPoint++;
    }
  }
  return sPoint >= s.length;

};
console.log(isSubsequence(["abc", "ahbgdc"]));


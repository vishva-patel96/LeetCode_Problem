var isIsomorphic = function (s, t) {

  if (s.length !== t.length)
  {
    return false;
  }

  let str1 = "";
  let str2 = "";
  for (let i = 0; i < s.length; i++)
  {
     str1 = s.indexOf(s[i]);
     str2 = t.indexOf(t[i]);

    if (s[str2] !== s[i] || t[str1] !== t[i])
    {
      return false;
      }

    }
 

  return true;

};
console.log(isIsomorphic(["egg", "foo"]));


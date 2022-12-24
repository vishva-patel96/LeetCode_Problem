//Given a string s containing just the characters 
//'(', ')', '{', '}', '[' and ']', determine if the input string is valid.
var isValid = function (s) {
    //create hash map
    let map = {
        ")": "(",
        "}": "{",
        "]":"["
    }

    let result = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "{" || s[i] == "(" || s[i] == "[") {
            result.push(s[i]);
        } else if (result[result.length - 1] === map[s[i]]) {
            result.pop()
        } else {
            return false;
        }
     }
    return result.length ? false : true
};

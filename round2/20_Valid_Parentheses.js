/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (typeof s !== "string") return false;
    if (s.length === 0) return true;
    let stack = [], top = -1;
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c === '(' || c === '[' || c === '{') {
            stack.push(c);
            top++;
        } else if (c === ')' || c === ']' || c === '}') {
            if (stack.length === 0) return false;
            let t = stack[top];
            if ((t === '(' && c ===')') || (t === '[' && c ===']') || (t === '{' && c ==='}')) {
                stack.pop();
                top--;
            } else return false
        } else return false;
    }
    return top === -1;
};
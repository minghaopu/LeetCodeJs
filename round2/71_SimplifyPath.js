/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let i = 0, tokens = [];
    path += '/';
    while (i < path.length) {
        let pos = path.indexOf('/', i);
        if (pos < i) {
            tokens.push(path);
            break;
        } else {
            let sub = path.substr(i, pos - i);
            if (sub === "..") tokens.pop();
            else if (sub !== "" && sub !== ".") tokens.push(sub);
            i = pos + 1;
        }
    }
    if (tokens.length === 0) return "/";
    else return tokens.reduce((acc, cur) => {
        return acc += "/" + cur;
    }, "");
};
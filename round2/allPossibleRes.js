function getAllPossibleCombination(str) {
	if (typeof str !== "string" || str.length === "") return [];
	return (function helper (str, pos) {
		if (pos === str.length) return [""];
		let ch = str.charCodeAt(pos);
		let rest = helper(str, pos + 1);
		let res = [];
		if (ch <= 57 && ch >= 48) {
			for (let i = 0; i < rest.length; i++) {
				res.push(str[pos] + rest[i]);
			}
		} else if (ch <= 122 && ch >= 97){
			for (let i = 0; i < rest.length; i++) {
				res.push(str[pos] + rest[i]);
				res.push(str[pos].toUpperCase() + rest[i]);
			}
		}
		return res;
	})(str.toLowerCase(), 0)
}
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
	if (wordList.length === 0) return [];
	let queue = [beginWord];
	let visited = {
		[beginWord]: 0
	}; // string : int;
	let charMap = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	let cache = new Set(wordList);
	let map = {}; // string : string []
	let len = beginWord.length;

	while (queue.length !== 0) {
		let front = queue.shift();
		if (front === endWord) break;
		let step = visited[front];
		let neighbors = [];
		for (let i = 0; i < len; i++) {
			for (let ch of charMap) {
				let tmp = front.slice(0, i) + ch + front.slice(i + 1);
				if (tmp === front || !cache.has(tmp)) continue;
				if (!visited.hasOwnProperty(tmp)) {
					queue.push(tmp);
					visited[tmp] = step + 1;
				}
				neighbors.push(tmp);
			}
		}
		map[front] = neighbors.slice();

	}
	let res = [];

	(function dfs(path, curStr) {
		if (curStr === endWord) {
			res.push(path.slice());
		} else {
			let curLevel = visited[curStr];
			if (map.hasOwnProperty(curStr)) {
				for (let neighbor of map[curStr]) {
					if (visited[neighbor] !== curLevel + 1) continue;
					path.push(neighbor);
					dfs(path, neighbor);
					path.pop();
				}
			}

		}
	})([beginWord], beginWord);
	return res;
};
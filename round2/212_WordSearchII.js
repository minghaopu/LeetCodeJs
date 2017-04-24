/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

class TrieNode {
	constructor() {
		this.isWord = false;
		this.next = new Array(26).fill(null);
		this.index = 0;
	}
	insert(s, idx) {
		let p = this;
		for (let ch of s) {
			let i = ch.charCodeAt(0) - 97;
			if (!p.next[i]) p.next[i] = new TrieNode();
			p = p.next[i];
		}
		p.isWord = true;
		p.index = idx;
	}
	buildTree(words) {
		for (let i = 0; i < words.length; i++) this.insert(words[i], i);
		return this;
	}
}
var findWords = function(board, words) {
	if (words.length === 0 || board.length === 0 || board[0].length === 0) return [];
	let trie = new TrieNode().buildTree(words);
	let res = [];
	const row = board.length, col = board[0].length;
	function dfs(node, i, j) {
		if (!node) return;
		if (node.isWord) {
			res.push(words[node.index]);
			node.isWord = false;
		} else {
			if (i < 0 || j < 0 || i >= row || j >= col) return;
			let ch = board[i][j], charIdx = ch.charCodeAt(0) - 97;
			board[i][j] = '*';
			dfs(node.next[charIdx], i + 1, j);
			dfs(node.next[charIdx], i - 1, j);
			dfs(node.next[charIdx], i, j + 1);
			dfs(node.next[charIdx], i, j - 1);
			board[i][j] = ch;
		}
	}
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			dfs(trie, i, j);
		}
	}
	return res;
};

let boards = ["oaan","etae","ihkr","iflv"];
let words = ["oath","pea","eat","rain"];
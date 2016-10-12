(function(window, undefined) {
	var lCode = (function() {
		var lCode = function() {
			return new lCode.fn.init();
		}
		return lCode;
	})();
	lCode.fn = lCode.prototype = {
		constructor: lCode,
		init: function() {},
		version: "1.0.0"
	}
	lCode.extend = lCode.fn.extend = function() {
		var opions, name, src, copy, target = {};
		if (arguments.length === 1) {
			target = this;
		}
		if ((options = arguments[0]) != null) {
			for (name in options) {
				src = target[name];
				copy = options[name];
				if (target === copy) {
					continue;
				}
				if (copy !== undefined) {
					target[name] = copy;
					target[name].fn = target[name].prototype
				}
			}
		}
	}

	lCode.fn.init.prototype = lCode.fn;


	function ListNode(val) {
		this.val = val;
		this.next = null;
	}

	String.prototype.replaceAt = function(index, char) {
		return this.substring(0, index) + char + this.substring(index + 1);
	}
	Array.prototype.swap = function(x, y) {
		var b = this[x];
		this[x] = this[y];
		this[y] = b;
		return this;
	}
	String.prototype.swap = function(x, y) {
		var t = this[x];
		var c = this.substring(0, x) + this[y] + this.substring(x + 1);
		return c.substring(0, y) + t + this.substring(y + 1);
	};
	Array.prototype.replaceAt = function(index, value) {
		this[index] = value;
		return this;
	}

	/*
	 *		LeetCOde Answer
	 */



	lCode.extend({
		/*
		 *		15	3Sum
		 */
		threeSum: function(nums) {
			nums.sort(function(a, b) {
				return a - b;
			});
			var a, b, c;
			var result = [];
			var len = nums.length;

			for (var i = 0; i < len - 2; i++) {
				if (i > 0 && nums[i] === nums[i - 1]) continue;
				a = nums[i];
				var l = i + 1;
				var r = len - 1;
				while (l < r) {
					b = nums[l];
					c = nums[r];
					if (a + b + c === 0) {
						result.push([a, b, c]);
						while (nums[l] === nums[l + 1]) {
							l++;
						}
						while (nums[r] === nums[r - 1]) {
							r--;
						}
						l++;
						r--;
					} else if (a + b + c < 0) {
						l++;
					} else {
						r--;
					}
				}
			}
			return result;
		},
		/*
		 *		148 Sort Linked List
		 */
		sortList: function(head) {
			if (head === null || head.next === null) return head;
			var slow = head;
			var fast = head.next;
			while (fast && fast.next) {
				slow = slow.next;
				fast = fast.next.next;
			}

			var h2 = slow.next;
			slow.next = null;
			return this.mergeList(this.sortList(head), this.sortList(h2));
		},
		mergeList: function(h1, h2) {
			var head = new ListNode(0);
			var n = head;
			while (h1 && h2) {
				if (h1.val < h2.val) {
					n.next = h1;
					h1 = h1.next;
				} else {
					n.next = h2;
					h2 = h2.next;
				}
				n = n.next;
			}
			if (h1) {
				n.next = h1;
			}
			if (h2) {
				n.next = h2;
			}
			return head.next;
		},
		createList: function(array) {
			var head = new ListNode(0);
			var n = head;
			for (var i = 0; i < array.length; i++) {
				var node = new ListNode(array[i]);
				n.next = node;
				n = n.next;
			}
			return head.next;
		},
		/*
		 *		53. Maximum Subarray
		 */
		maxSubArray: function(nums) {
			var ans = nums[0],
				sum = 0;
			for (var i = 1; i < nums.length; i++) {
				if (sum > 0) sum += nums[i];
				else sum = nums[i];
				if (sum > ans) ans = sum;
			}
			return ans;
		},
		/*
		 *		139. Word Break
		 */
		wordBreak: function(s, wordDict) {

			// wordDict is class of Set
			/* 
			 * time limit exceeded
			 */

			// if (wordDict.size === 0) return false;
			// if (wordDict.has(s)) return true;
			// var word = "";
			// for (var i = 0; i < s.length; i++) {
			// 	word += s[i];
			// 	if (wordDict.has(word)) {
			// 		if (wordBreak(s.slice(i + 1), wordDict)) return true;
			// 	}
			// }
			// return false;

			/* 
			 * use dp to cache result;
			 */
			if (wordDict.size === 0) return false;
			var dp = new Array(s.length + 1);
			dp.fill(false);
			// Array.apply(null, dp).map(Boolean.prototype.valueOf,false);
			// or dp.fill(false);

			dp[0] = true;

			for (var i = 1; i < s.length + 1; i++) {
				for (var j = i - 1; j >= 0; j--) {
					if (dp[j]) {
						var sub = s.substr(j, i - j);
						if (wordDict.has(sub)) {
							dp[i] = true;
							break;
						}
					}
				}
			}
			return dp[s.length];

		},
		/*
		 *		11. Container With Most Water
		 */
		/**
		 * @param {number[]} height
		 * @return {number}
		 */
		maxArea: function(height) {
			var water = 0;
			var l = 0,
				r = height.length - 1;
			while (l < r) {
				var h = Math.min(height[l], height[r]);
				water = Math.max(water, Math.min(height[l], height[r]) * (r - l));
				height[l] > height[r] ? r-- : l++; // move the smaller one
			}
			return water;
		},
		/*
		 *		153. Find Minimum in Rotated Sorted Array
		 */
		/**
		 * @param {number[]} nums
		 * @return {number}
		 */
		findMin: function(nums) {
			var l = 0,
				r = nums.length - 1;
			while (l < r) {
				var mid = Math.floor((r - l) / 2) + l;
				if (nums[mid] < nums[r]) r = mid;
				else l = mid + 1;
			}
			return nums[l];
		},
		/*
		 *		150. Evaluate Reverse Polish Notation
		 */
		/**
		 * @param {string[]} tokens
		 * @return {number}
		 */
		vevalRPN: function(tokens) {
			var stack = [];
			for (var i = 0; i < tokens.length; i++) {
				var t = tokens[i];
				if (t === "+" || t === "-" || t === "*" || t === "/") {
					var op2 = stack.pop();
					var op1 = stack.pop();
					if (t === "+") stack.push(op1 + op2);
					if (t === "-") stack.push(op1 - op2);
					if (t === "*") stack.push(op1 * op2);
					if (t === "/") stack.push(parseInt(op1 / op2, 10));
				} else {
					stack.push(parseInt(t));
				}
			}
			return stack.pop();
		},
		/*
		 *		49. Group Anagrams
		 */
		/**
		 * @param {string[]} strs
		 * @return {string[][]}
		 */
		groupAnagrams: function(strs) {
			var map = {};
			for (var i = 0; i < strs.length; i++) {
				var t = this.countSortString(strs[i]);
				if (map[t] === undefined) {
					map[t] = [];
				}
				map[t].push(strs[i]);
			}
			var result = [];
			for (var prop in map) {
				result.push(map[prop]);
			}
			return result;
		},
		countSortString: function(string) {
			var c = {
				"a": 0,
				"b": 0,
				"c": 0,
				"d": 0,
				"e": 0,
				"f": 0,
				"g": 0,
				"h": 0,
				"i": 0,
				"j": 0,
				"k": 0,
				"l": 0,
				"m": 0,
				"n": 0,
				"o": 0,
				"p": 0,
				"q": 0,
				"r": 0,
				"s": 0,
				"t": 0,
				"u": 0,
				"v": 0,
				"w": 0,
				"x": 0,
				"y": 0,
				"z": 0
			};
			var s = "";
			for (var i = 0; i < string.length; i++) {
				c[string[i]]++;
			}
			for (var prop in c) {
				for (var i = c[prop]; i > 0; i--) {
					s += prop;
				}
			}
			return s;
		},
		/*
		 *		122. Best Time to Buy and Sell Stock II
		 */
		/**
		 * @param {number[]} prices
		 * @return {number}
		 */
		maxProfit: function(prices) {
			var len = prices.length;
			if (len < 2) {
				return 0;
			}
			var max = 0;
			for (var i = 1; i < len; i++) {
				var change = prices[i] - prices[i - 1];
				if (change > 0) {
					max += change;
				}
			}
			return max;
		},
		/*
		 *		122. Best Time to Buy and Sell Stock II
		 */
		/**
		 * @param {string} digits
		 * @return {string[]}
		 */
		letterCombinations: function(digits) {
			if (digits.length === 0) {
				return [];
			}
			var board = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
			var result = [""];
			for (var i = 0; i < digits.length; i++) {
				var add = board[parseInt(digits[i])];
				if (add.length === 0) continue;
				var tmp = [];
				for (var j = 0; j < result.length; j++) {
					for (var k = 0; k < add.length; k++) {
						tmp.push(result[j] + add[k]);
					}
				}
				result = tmp.concat();
			}
			return result;
		},
		/*
		 *		152. Maximum Product Subarray
		 */
		/**
		 * @param {number[]} nums
		 * @return {number}
		 */
		maxProduct: function(nums) {
			var n = nums.length;
			if (n === 0) return 0;
			var res = Number.Minimum;
			for (var i = 0, frontproduct = 1, backproduct = 1; i < n; i++) {
				frontproduct *= nums[i];
				backproduct *= nums[n - i - 1];
				res = Math.max(res, Math.max(frontproduct, backproduct));
				if (frontproduct === 0) frontproduct = 1;
				if (backproduct === 0) backproduct = 1;
			}
			return res;
		},
		/*
		 *		152. Maximum Product Subarray
		 */
		/**
		 * @param {number[]} nums
		 * @return {string}
		 */
		largestNumber: function(nums) {
			var res = "";
			nums.sort(function() {
				return ("" + b + a) - ("" + a + b);
			});
			for (var i = 0; i < nums.length; i++) {
				res += nums[i];
			}
			return res[0] === "0" ? "0" : res;
		},
		/*
		 *		29. Divide Two Integers 
		 */
		/**
		 * @param {number} dividend
		 * @param {number} divisor
		 * @return {number}
		 */
		divide: function(dividend, divisor) {
			const MAX_VALUE = 2147483647;
			const MIN_VALUE = -2147483648;
			if (divisor === 0 || (dividend === MIN_VALUE && divisor === -1)) return MAX_VALUE;
			var res = 0;
			var sign = (dividend < 0) ^ (divisor < 0);
			dividend = Math.abs(dividend);
			divisor = Math.abs(divisor);
			while (dividend >= divisor) {
				var multiple = 1,
					temp = divisor;
				while ((temp < MAX_VALUE / 2) && dividend >= (temp << 1)) {
					multiple <<= 1;
					temp <<= 1;
				}
				dividend -= temp;
				res += multiple;
			}
			return sign === 0 ? res : -res;
		},
		/*
		 *		127. Word Ladder
		 */
		/**
		 * @param {string} beginWord
		 * @param {string} endWord
		 * @param {Set} wordList
		 *   Note: wordList is a Set object, see:
		 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
		 * @return {number}
		 */
		// BFS
		ladderLength: function(beginWord, endWord, wordList) {
			var queue = [beginWord];
			var charTable = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
			wordList.delete(beginWord);
			var dist = 2;
			while (queue.length > 0) {
				var l = queue.length;
				for (var i = 0; i < l; i++) {
					beginWord = queue.shift();
					for (j = 0; j < beginWord.length; j++) {
						var tmp = beginWord;
						for (k = 0; k < 26; k++) {
							tmp = tmp.replaceAt(j, charTable[k]);
							if (tmp === endWord) return dist;
							if (tmp !== beginWord && wordList.has(tmp)) {
								queue.push(tmp);
								wordList.delete(tmp);
							}
						}
					}
				}
				dist++;
			}
			return 0;
		},
		/*
		 *		79. Word Search
		 */
		/**
		 * @param {character[][]} board
		 * @param {string} word
		 * @return {boolean}
		 */
		isFound: function(board, word, start, x, y, m, n) {
			if (start === word.length) {
				return true;
			}
			if (x < 0 || y < 0 || x >= m || y >= n) {
				return false;
			}
			var t = board[x][y];
			if (t !== word[start] || t === "*") {
				return false;
			}
			board[x][y] = "*";
			var res = false;
			if (!res) res = this.isFound(board, word, start + 1, x - 1, y, m, n);
			if (!res) res = this.isFound(board, word, start + 1, x, y - 1, m, n);
			if (!res) res = this.isFound(board, word, start + 1, x + 1, y, m, n);
			if (!res) res = this.isFound(board, word, start + 1, x, y + 1, m, n);
			board[x][y] = t;
			return res;
		},
		exist: function(board, word) {
			var m = board.length;
			var n = board[0].length;
			for (var i = 0; i < m; i++) {
				for (var j = 0; j < n; j++) {
					if (this.isFound(board, word, 0, i, j, m, n)) return true;
				}
			}
			return false;
		},
		/*
		 *		46. Permutations
		 */
		/**
		 * @param {number[]} nums
		 * @return {number[][]}
		 */
		dfs: function(result, nums, start, length) {
			if (start === length) {
				result.push(nums.slice());
				return;
			}
			for (var i = start; i < length; i++) {
				nums.swap(start, i);
				this.dfs(result, nums, start + 1, length);
				nums.swap(start, i);
			}
		},
		permute: function(nums) {
			var result = [];
			this.dfs(result, nums, 0, nums.length);
			return result;
		},
		/*
		 *		54. Spiral Matrix
		 */
		/**
		 * @param {number[][]} matrix
		 * @return {number[]}
		 */
		spiralOrder: function(matrix) {
			if (matrix.length === 0) return [];
			var r_start = 0,
				r_end = matrix.length - 1,
				c_start = 0,
				c_end = matrix[0].length - 1,
				i = 0;
			var res = [];
			while (true) {
				for (var col = c_start; col <= c_end; col++) res[i++] = matrix[r_start][col];
				if (++r_start > r_end) break;
				for (var row = r_start; row <= r_end; row++) res[i++] = matrix[row][c_end];
				if (--c_end < c_start) break;
				for (col = c_end; col >= c_start; col--) res[i++] = matrix[r_end][col];
				if (--r_end < r_start) break;
				for (row = r_end; row >= r_start; row--) res[i++] = matrix[row][c_start];
				if (++c_start > c_end) break;
			}
			return res;
		},
		/*
		 *		22. Parenthesis
		 */
		/**
		 * @param {number} n
		 * @return {string[]}
		 */

		// check: function(str) {
		// 	for (var i = 0, stack = []; i < str.length; i++) {
		// 		if (str[i] === ")" && stack.length !== 0 && stack[stack.length - 1]) stack.pop();
		// 		else stack.push(str[i]);
		// 	}
		// 	return stack.length === 0;
		// },
		// dfs: function(res, string, start, length) {
		// 	if (start === length && this.check(string) && res.indexOf(string) === -1) {
		// 		res.push(string);
		// 	} else {
		// 		for (var i = start; i < length; i++) {
		// 			var c = string.swap(start, i);
		// 			this.dfs(res, c, start + 1, length);
		// 		}
		// 	}
		// },
		// generateParenthesis: function(n) {
		// 	var res = [];
		// 	for (var i = 0, string = ""; i < n; i++) {
		// 		string += "()";
		// 	}
		// 	this.dfs(res, string, 1, 2 * n)
		// 	return res;
		// }
		dfs: function(res, str, left, right) {
			if (left === 0 && right === 0) {
				res.push(str);
			} else {
				if (left > 0) this.dfs(res, str + "(", left - 1, right + 1);
				if (right > 0) this.dfs(res, str + ")", left, right - 1);
			}
		},
		generateParenthesis: function(n) {
			var res = [];
			this.dfs(res, "", n, 0)
			return res;
		},
		/*
		 *		142. Linked List Cycle II  
		 */
		/**
		 * Definition for singly-linked list.
		 * function ListNode(val) {
		 *     this.val = val;
		 *     this.next = null;
		 * }
		 */

		/**
		 * @param {ListNode} head
		 * @return {ListNode}
		 */
		detectCycle: function(head) {
			var slow = head;
			var fast = head;
			var entry = head;
			while (fast !== null && fast.next !== null) {
				slow = slow.next;
				fast = fast.next.next;
				if (slow === fast) {
					while (entry != slow) {
						entry = entry.next;
						slow = slow.next;
					}
					return entry;
				}
			}
			return null;
		},
		/*
		 *		200. Number of Islands
		 */
		/**
		 * @param {character[][]} grid
		 * @return {number}
		 */
		numIslands: function(grid) {
			if (grid.length === 0) return 0;
			var res = 0;
			var m = grid.length;
			var n = grid[0].length;
			for (var i = 0; i < m; i++) {
				for (var j = 0; j < n; j++) {
					if (grid[i][j] !== "1") continue;
					else {
						res++;
						this.expand(grid, i, j, m, n);
					}
				}
			}
			return res;
		},
		expand: function(grid, x, y, m, n) {
			grid[x] = grid[x].replaceAt(x, "*");
			if (x < m - 1 && grid[x + 1][y] === "1") this.expand(grid, x + 1, y, m, n);
			if (y < n - 1 && grid[x][y + 1] === "1") this.expand(grid, x, y + 1, m, n);
			if (x > 0 && grid[x - 1][y] === "1") this.expand(grid, x - 1, y, m, n);
			if (y > 0 && grid[x][y - 1] === "1") this.expand(grid, x, y - 1, m, n);
		},
		/*
		 *		48. Rotate Image
		 */
		rotate: function(matrix) {
			var l = matrix.length;
			if (l === 0) return;
			var res = [];
			for (var i = 0; i < l; i++) {
				res[i] = [];
			}
			for (var i = 0; i < l; i++) {
				for (var j = 0; j < l; j++) {
					res[j][l - i - 1] = matrix[i][j];
				}
			}
			matrix.length = 0;
			for (var i = 0; i < l; i++) {
				matrix[i] = res[i];
			}
		},
		/*
		 *		96. Unique Binary Search Trees
		 */
		/**
		 * @param {number} n
		 * @return {number}
		 */
		numTrees: function(n) {
			var count = new Array(n + 1);
			count.fill(0);
			count[0] = 1;
			count[1] = 1;
			for (var i = 2; i <= n; i++) {
				for (var j = 0; j < i; j++) {
					count[i] += count[j] * count[i - j - 1];
				}
			}
			return count[n];
		},
		/*
		 *		147. Insertion Sort List
		 */
		/**
		 * Definition for singly-linked list.
		 * function ListNode(val) {
		 *     this.val = val;
		 *     this.next = null;
		 * }
		 */
		/**
		 * @param {ListNode} head
		 * @return {ListNode}
		 */
		insertionSortList: function(head) {
			var new_head = new ListNode(0);
			var pre = new_head;
			var cur = head;
			var next = null;
			while (cur !== null) {
				next = cur.next;
				while (pre.next !== null && pre.next.val < cur.val) {
					pre = pre.next;
				}
				cur.next = pre.next;
				pre.next = cur;
				cur = next;
				pre = new_head;
			}
			return new_head.next;
		},
		/*
		 *		91. Decode Ways
		 */
		/**
		 * @param {string} s
		 * @return {number}
		 */
		numDecodings: function(s) {
			if (s.length === 0 || s[0] === "0") return 0;
			var r1 = 1,
				r2 = 1;
			for (var i = 0; i < s.length; i++) {
				if (s[i] === "0") r1 = 0;
				if (s[i - 1] === "1" || (s[i - 1] === "2" && parseInt(s[i]) < 7)) {
					r1 += r2;
					r2 = r1 - r2;
				} else {
					r2 = r1;
				}
			}
			return r1;
		},
		/*
		 *		228. Summary Ranges
		 */
		/**
		 * @param {number[]} nums
		 * @return {string[]}
		 */
		summaryRanges: function(nums) {
			var res = [];
			var to = "->";
			var start = nums[0];
			var end = nums[0];
			var string = "";
			nums.push(end);
			for (var i = 1; i < nums.length; i++) {
				if (nums[i] === end + 1) {
					end = nums[i];
				} else {
					string = "";
					if (start === end) {
						string += start;
					} else {
						string += start + to + end;
					}
					res.push(string);
					start = nums[i];
					end = start;
				}
			}
			return res;
		},
		/*
		 *		238. Product of Array Except Self
		 */
		/**
		 * @param {number[]} nums
		 * @return {number[]}
		 */
		productExceptSelf: function(nums) {
			var l = nums.length;
			var res = new Array(l);
			res.fill(1);
			var right = new Array(l);
			right.fill(1);
			for (var i = 1; i < l; i++) {
				res[i] = res[i - 1] * nums[i - 1];
			}
			for (var i = l - 2; i > -1; i--) {
				right[i] = right[i + 1] * nums[i + 1];
				res[i] *= right[i];
			}
			return res;
		},
		/*
		 *		143. Reorder List && Reverse List
		 */
		/**
		 * Definition for singly-linked list.
		 * function ListNode(val) {
		 *     this.val = val;
		 *     this.next = null;
		 * }
		 */
		/**
		 * @param {ListNode} head
		 * @return {void} Do not return anything, modify head in-place instead.
		 */
		reverseList: function(head) {
			if (head === null) return null;
			var pre = null;
			var cur = head;
			while (cur) {
				var next = cur.next;
				cur.next = pre;
				pre = cur;
				cur = next;
			}
			return pre
		},
		reorderList: function(head) {
			if (head === null) return;
			var cur = head;
			var fast = head;
			var slow = head;
			var mid;
			while (fast && fast.next) {
				slow = slow.next;
				fast = fast.next.next;
			}
			if (fast) {
				mid = slow.next;
			} else {
				mid = slow;
			}
			var back = reverseList(mid);
			while (back && cur.next !== back) {
				var aNext = cur.next;
				var bNext = back.next;
				back.next = aNext;
				cur.next = back;
				cur = aNext;
				back = bNext;
			}
			if (back === null) cur.next = null;
		}

	})

	window.l = window.lCode = lCode;
})(window)
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
		},
		/*
		 *		16. 3Sum Closest
		 */
		/**
		 * @param {number[]} nums
		 * @param {number} target
		 * @return {number}
		 */
		threeSumClosest: function(nums, target) {
			var size = nums.length;
			if (size < 3) return 0;
			var closet = nums[0] + nums[1] + nums[2];
			nums.sort(function(a, b) {
				if (a - b > 0) return 1;
				else if (a - b < 0) return -1;
				else return 0;
			});
			for (var first = 0; first < size - 2; first++) {
				if (first > 0 && nums[first] == nums[first - 1]) continue;
				var second = first + 1;
				var third = size - 1;
				while (second < third) {
					var curSum = nums[first] + nums[second] + nums[third];
					if (curSum === target) return curSum;
					if (Math.abs(curSum - target) < Math.abs(target - closet)) closet = curSum;
					if (curSum > target) {
						third--;
					} else {
						second++;
					}
				}
			}
			return closet;
		},
		/*
		 *		43. Multiply Strings
		 */
		/**
		 * @param {string} num1
		 * @param {string} num2
		 * @return {string}
		 */
		multiply: function(num1, num2) {
			var sum = [];
			var l1 = num1.length;
			var l2 = num2.length;
			sum.length = l1 + l2;
			sum.fill(0);
			for (var i = l1 - 1; i > -1; i--) {
				var carry = 0;
				for (var j = l2 - 1; j > -1; j--) {
					var tmp = parseInt(num1[i]) * parseInt(num2[j]) + sum[i + j + 1] + carry;
					var mod = tmp % 10;
					carry = (tmp - mod) / 10;
					sum[i + j + 1] = mod;
				}
				sum[i] += carry;
			}
			var start = 0;
			while (start < l1 + l2 - 1) {
				if (sum[start] !== 0) break;
				start++;
			}
			return sum.slice(start).join('');
		},
		/*
		 *		116. Populating Next Right Pointers in Each Node
		 */
		/**
		 * Definition for binary tree with next pointer.
		 * function TreeLinkNode(val) {
		 *     this.val = val;
		 *     this.left = this.right = this.next = null;
		 * }
		 */

		/**
		 * @param {TreeLinkNode} root
		 * @return {void} Do not return anything, modify tree in-place instead.
		 */
		connect: function(root) {
			if (root === null) return;
			var pre = root;
			var cur = null;
			while (pre.left !== null) {
				cur = pre;
				while (cur) {
					cur.left.next = cur.right;
					if (cur.next) cur.right.next = cur.next.left;
					cur = cur.next;
				}
				pre = pre.left;
			}
		},
		/*
		 *		98. Validate Binary Search Tree
		 */
		/**
		 * Definition for a binary tree node.
		 * function TreeNode(val) {
		 *     this.val = val;
		 *     this.left = this.right = null;
		 * }
		 */
		/**
		 * @param {TreeNode} root
		 * @return {boolean}
		 */
		isValidBST: function(root) {
			return isSubValid(root, null, null);
		},
		isSubValid: function(root, min, max) {
			if (root === null) return true;
			if ((min && root.val <= min.val) || (max && root.val >= max.val)) return false;
			return isSubValid(root.left, min, root) && isSubValid(root.right, root, max);
		},
		/*
		 *		162. Find Peak Element
		 */
		/**
		 * @param {number[]} nums
		 * @return {number}
		 */
		findAllPeakElements: function(nums) {
			var res = [];
			var l = nums.length;
			var left = 0;
			while (left < l - 1) {
				var start = left + 1;
				if (start === l - 1) {
					if (nums[left] < nums[start]) res.push(start);
					else res.push(left);
					left++;
				} else {
					if (nums[left] < nums[start]) {
						if (nums[start] < nums[left]) left++;
						else {
							res.push(start);
							left += 2;
						}
					} else {
						res.push(left);
						left += 2;
					}
				}
			}
			return res;
		},
		findPeakElement: function(nums) {
			var l = nums.length;
			var left = 0;
			while (left < l - 1) {
				var start = left + 1;
				if (start === l - 1) {
					if (nums[left] < nums[start]) return start;
					else return left;
				} else {
					if (nums[left] < nums[start]) {
						if (nums[start] < nums[start + 1]) left++;
						else return start;
					} else {
						return left;
					}
				}
			}
			return 0;
		},
		/*
		 *		75. Sort Colors
		 */
		/**
		 * @param {number[]} nums
		 * @return {void} Do not return anything, modify nums in-place instead.
		 */
		sortColors: function(nums) {
			var map = [0, 0, 0];
			for (var i = 0; i < nums.length; i++) {
				map[nums[i]]++;
			}
			var i = 0;
			var total = 0;
			var j = 0;
			while (j < 3) {
				if (i < map[j]) {
					nums[total] = j;
					total++;
					i++;
				} else {
					j++;
					i = 0;
				}

			}

		},
		/*
		 *		55. Jump Game
		 */
		/**
		 * @param {number[]} nums
		 * @return {boolean}
		 */
		canJump: function(nums) {
			var i = 0;
			var maxIndex = 0;
			while (i <= maxIndex && i < nums.length) {
				maxIndex = Math.max(maxIndex, i + nums[i]);
				i++;
			}
			return maxIndex >= nums.length - 1;
		},
		/*
		 *		120. Triangle
		 */
		/**
		 * @param {number[][]} triangle
		 * @return {number}
		 */
		minimumTotal: function(triangle) {
			121
			var l = triangle.length;
			121
			var minlen = triangle[l - 1];
			for (var level = l - 2; level > -1; level--) {
				for (var i = 0; i <= level; i++) {
					minlen[i] = Math.min(minlen[i], minlen[i + 1]) + triangle[level][i];
				}
			}
			return minlen[0];
		},
		/*
		 *		134. Gas Station
		 */
		/**
		 * @param {number[]} gas
		 * @param {number[]} cost
		 * @return {number}
		 */
		canCompleteCircuit: function(gas, cost) {
			var l = gas.length;
			var tank = 0;
			var start = 0;
			var subsum = Number.MAX_VALUE;
			for (var i = 0; i < l; i++) {
				tank += gas[i] - cost[i];
				if (tank < subsum) {
					subsum = tank;
					start = i + 1;
				}
			}
			return tank < 0 ? -1 : (start % l);
		},
		/*
		 *		39. Combination Sum
		 */
		/**
		 * @param {number[]} candidates
		 * @param {number} target
		 * @return {number[][]}
		 */
		combinationSum: function(candidates, target) {
			var res = [];
			candidates.sort(function(a, b) {
				if (a - b > 0) return 1;
				else if (a - b < 0) return -1;
				else return 0;
			})
			for (var i = 0; i < candidates.length; i++) {
				if (i > 0 && candidates[i] === candidates[i - 1]) continue;
				var row = [candidates[i]];
				findRest(res, row, candidates, target - candidates[i], i);
			}
			return res;
		},
		findRest: function(res, row, candidates, target, start) {
			if (target === 0) {
				res.push(row.slice());
				return;
			}
			if (target < candidates[0]) return;
			for (var i = start; i < candidates.length; i++) {
				var t = candidates[i];
				row.push(t);
				findRest(res, row, candidates, target - t, i);
				row.pop(t);
			}
		},
		/*
		 *		187. Repeated DNA Sequences
		 */
		/**
		 * @param {string} s
		 * @return {string[]}
		 */
		findRepeatedDnaSequences: function(s) {
			var res = [];
			if (s.length < 11) return res;
			var map = {};
			for (var i = 0; i < s.length - 9; i++) {
				var t = s.substring(i, i + 10);
				if (map[t] === undefined) map[t] = 1;
				else map[t]++;
			}
			for (var prop in map) {
				if (map[prop] > 1) res.push(prop);
			}
			return res;
		},
		/*
		 *		31. Next Permutation
		 */
		/**
		 * @param {number[]} nums
		 * @return {void} Do not return anything, modify nums in-place instead.
		 */
		nextPermutation: function(nums) {
			var violationIndex = nums.length - 2;
			while (violationIndex > -1 && nums[violationIndex] >= nums[violationIndex + 1]) violationIndex--;

			var reverseArray = nums.slice(violationIndex + 1).reverse();


			if (violationIndex !== -1) {
				reverseArray = nums.slice(0, violationIndex + 1).concat(reverseArray);
				var swapIndex = violationIndex + 1;
				while (swapIndex < reverseArray.length && reverseArray[swapIndex] <= reverseArray[violationIndex]) swapIndex++;
				var t = reverseArray[swapIndex];
				reverseArray[swapIndex] = reverseArray[violationIndex];
				reverseArray[violationIndex] = t;
			}
			for (var i = 0; i < nums.length; i++) {
				nums[i] = reverseArray[i];
			}
		},
		/*
		 *		62. Unique Paths
		 */
		/**
		 * @param {number} m
		 * @param {number} n
		 * @return {number}
		 */
		uniquePaths: function(m, n) {
			var dp = [];
			for (var i = 0; i < m; i++) {
				dp[i] = [];
			}
			for (var i = 0; i < m; i++) {
				dp[i][0] = 1;
			}
			for (var i = 0; i < n; i++) {
				dp[0][i] = 1;
			}
			dp[0][0] = 1;
			for (var i = 1; i < m; i++) {
				for (var j = 1; j < n; j++) {
					dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
				}
			}
			return dp[m - 1][n - 1];
		},
		/*
		 *		78. Subsets
		 */
		/**
		 * @param {number[]} nums
		 * @return {number[][]}
		 */
		subsets: function(nums) {
			var res = [
				[]
			];
			for (var i = 0; i < nums.length; i++) {
				var n = res.length;
				for (var j = 0; j < n; j++) {
					res.push(res[j].slice(0));
					res[n + j].push(nums[i]);
				}
			}
			return res;
		},
		/*
		 *		268. Missing Number
		 */
		/**
		 * @param {number[]} nums
		 * @return {number}
		 */
		missingNumber: function(nums) {
			var res = nums.length;
			for (var i = 0; i < nums.length; i++) {
				res ^= i ^ nums[i];
			}
			return res;
		},
		/*
		 *		34. Search for a Range
		 */
		/**
		 * @param {number[]} nums
		 * @param {number} target
		 * @return {number[]}
		 */
		searchRange: function(nums, target) {
			var start = 0;
			var end = nums.length;
			var mid, left, right;
			while (start < end) {
				mid = Math.floor((start + end) / 2);
				if (nums[mid] >= target) {
					end = mid;
				} else {
					start = mid + 1;
				}
			}
			left = start;
			start = 0;
			end = nums.length;
			while (start < end) {
				mid = Math.floor((start + end) / 2);
				if (nums[mid] <= target) {
					start = mid + 1;
				} else {
					end = mid;
				}
			}
			right = start;

			return left === right ? [-1, -1] : [left, start - 1];
		},
		/*
		 *		236. Lowest Common Ancestor of a Binary Tree
		 */
		/**
		 * Definition for a binary tree node.
		 * function TreeNode(val) {
		 *     this.val = val;
		 *     this.left = this.right = null;
		 * }
		 */
		/**
		 * @param {TreeNode} root
		 * @param {TreeNode} p
		 * @param {TreeNode} q
		 * @return {TreeNode}
		 */
		lowestCommonAncestor: function(root, p, q) {
			// if p, q in dif sub tree, root must be the common.
			// if p, q in same tree, one of them must be common;
			if (!root || root === p || root === q) return root;
			var left = lowestCommonAncestor(root.left, p, q);
			var right = lowestCommonAncestor(root.right, p, q);
			return !left ? right : (!right ? left : root);
		},
		/*
		 *		73. Set Matrix Zeroes
		 */
		/**
		 * @param {number[][]} matrix
		 * @return {void} Do not return anything, modify matrix in-place instead.
		 */
		setZeroes: function(matrix) {
			var col0 = false;
			var m = matrix.length;
			var n = matrix[0].length;
			for (var i = 0; i < m; i++) {
				if (matrix[i][0] === 0) col0 = true;
				for (var j = 1; j < n; j++) {
					if (matrix[i][j] === 0) {
						matrix[i][0] = matrix[0][j] = 0;
					}
				}
			}
			for (var i = m - 1; i > -1; i--) {
				for (var j = n - 1; j > 0; j--) {
					if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
				}
				if (col0) matrix[i][0] = 0;
			}
		},
		/*
		 *		89. Gray Code
		 */
		/**
		 * @param {number} n
		 * @return {number[]}
		 */
		grayCode: function(n) {
			var res = [0];
			for (var i = 1; i <= n; i++) {
				var l = Math.pow(2, i);
				var half = l / 2;
				var t = res.slice(0).reverse();
				res.length = l;
				for (var j = 0; j < half; j++) {
					res[j + half] = t[j] ^ half;
				}
			}
			return res;
		},
		/*
		 *		166. Fraction to Recurring Decimal
		 */
		/**
		 * @param {number} numerator
		 * @param {number} denominator
		 * @return {string}
		 */
		fractionToDecimal: function(numerator, denominator) {
			if (numerator === 0) return "0";
			var res = (numerator < 0 ^ denominator < 0) ? "-" : "";
			var nn = Math.abs(numerator);
			var dd = Math.abs(denominator);
			res += "" + Math.floor(nn / dd);
			var rmd = nn % dd;
			if (!rmd) return res;
			res += ".";
			rmd *= 10;
			var hash = {};
			while (rmd) {
				if (hash[rmd] !== undefined) {
					res = res.slice(0, hash[rmd]) + "(" + res.slice(hash[rmd]) + ")";
					break;
				}
				var q = Math.floor(rmd / dd);
				hash[rmd] = res.length;
				res += "" + q;
				rmd = (rmd % dd) * 10;
			}
			return res;
		},
		/*
		 *		61. Rotate List
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
		 * @param {number} k
		 * @return {ListNode}
		 */
		rotateRight: function(head, k) {
			if (!head) return head;
			var len = 1;
			var last = head;
			while (last.next) {
				last = last.next;
				len++;
			}
			last.next = head;
			k %= len;
			if (k) {
				for (var i = 0; i < len - k; i++) last = last.next;
			}
			head = last.next;
			last.next = null;
			return head;
		},
		/*
		 *
		 *     35. Search Insert Position
		 *
		 */
		/**
		 * @param {number[]} nums
		 * @param {number} target
		 * @return {number}
		 */
		searchInsert: function(nums, target) {
			var l = 0,
				r = nums.length - 1,
				mid;
			while (l <= r) {
				mid = Math.floor((r - l) / 2) + l;
				if (nums[mid] < target) l = mid + 1;
				else r = mid - 1;
			}
			return l;
		},
		/*
		 *
		 *     338. Counting Bits
		 *
		 */
		/**
		 * @param {number} num
		 * @return {number[]}
		 */
		countBits: function(num) {
			var res = [0];
			for (var i = 1; i <= num; i++) {
				res[i] = res[i & (i - 1)] + 1;
			}
			return res;
		},
		/*
		 *
		 *     64. Minimum Path Sum
		 *
		 */
		/**
		 * @param {number[][]} grid
		 * @return {number}
		 */
		minPathSum: function(grid) {
			var m = grid.length;
			if (m === 0) return 0;
			var n = grid[0].length;
			var res = [];
			res.length = m;
			res[0] = [grid[0][0]]
			for (var i = 1; i < m; i++) {
				res[i] = [];
				res[i][0] = grid[i][0] + res[i - 1][0];
			}
			for (var j = 1; j < n; j++) {
				res[0][j] = grid[0][j] + res[0][j - 1];
			}
			for (i = 1; i < m; i++) {
				for (j = 1; j < n; j++) {
					res[i][j] = Math.min(res[i - 1][j], res[i][j - 1]) + grid[i][j];
				}
			}
			return res[m - 1][n - 1];
		},
		/*
		 *
		 *     92. Reverse Linked List II
		 *
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
		 * @param {number} m
		 * @param {number} n
		 * @return {ListNode}
		 */
		reverseBetween: function(head, m, n) {
			if (m === n) return head;
			var newHead = new ListNode(0);
			var pre = newHead;
			var p = head;
			var pm, prem, next;
			for (var i = 1; i < m; i++) {
				pre.next = p;
				pre = pre.next;
				p = p.next;
			}
			prem = pre;
			pm = p;
			for (i = m; i < n; i++) {
				next = p.next;
				p.next = pre;
				pre = p;
				p = next;
			}
			pm.next = p.next;
			p.next = pre;
			prem.next = p;
			return newHead.next;
		},
		/*
		 *
		 *     71. Simplify Path
		 *
		 */
		/**
		 * @param {string} path
		 * @return {string}
		 */
		simplifyPath: function(path) {
			var tokens = path.split("/");
			var stack = [];
			for (var i = 0; i < tokens.length; i++) {
				var token = tokens[i];
				if (token === "" || token === ".") continue;
				if (token === "..") {
					if (stack.length !== 0) stack.pop();
				} else stack.push(token);
			}
			return "/" + stack.join("/");
		},
		/*
		 *
		 *     388. Longest Absolute File Path
		 *
		 */
		/**
		 * @param {string} input
		 * @return {number}
		 */
		lengthLongestPath: function(input) {
			input += "\n";
			var token = "";
			var extension = "";
			var level = 0,
				count = 0,
				res = 0;
			var len = [];
			var isFile = false;
			for (var i = 0; i < input.length; i++) {
				var c = input[i];
				if (c === "\t") {
					count++;
				} else if (c === "\n") {
					while (level > count) {
						len.pop();
						level--;
					}
					if (isFile) {
						var t = 0;
						if (level > 0) t += len[level - 1];
						t += token.length + extension.length + level;
						res = Math.max(res, t);
						extension = "";
						isFile = false;
					} else {
						if (level > 0) len.push(len[level - 1] + token.length);
						else len.push(token.length);
						level++;
					}
					token = "";
					count = 0;
				} else {
					if (c === ".") isFile = true;
					if (isFile) extension += c;
					else token += c;
				}
			}
			return res;
		},
		/*
		 *
		 *     74. Search a 2D Matrix
		 *
		 */
		/**
		 * @param {number[][]} matrix
		 * @param {number} target
		 * @return {boolean}
		 */
		searchMatrix: function(matrix, target) {
			var l = 0;
			var r = matrix.length - 1;
			var mid;
			while (l <= r) {
				mid = Math.floor((r - l) / 2) + l;
				if (matrix[mid][0] < target) l = mid + 1;
				else r = mid - 1;
			}
			var row = l;
			if (row >= matrix.length) row--;
			if (matrix[row][0] > target) row--;
			if (row === -1) return false;
			l = 0;
			r = matrix[0].length;
			while (l <= r) {
				mid = Math.floor((r - l) / 2) + l;
				if (matrix[row][mid] < target) l = mid + 1;
				else r = mid - 1;
			}
			return matrix[row][l] == target;
		},
		/*
		 *
		 *     77. Combinations
		 *
		 */
		/**
		 * @param {number} n
		 * @param {number} k
		 * @return {number[][]}
		 */
		combine: function(n, k) {
			var res = [];
			var i = 0;
			var tmp = new Array(k);
			tmp.fill(0);
			while (i >= 0) {
				tmp[i]++;
				if (tmp[i] > n) i--;
				else if (i === k - 1) res.push(tmp.slice(0));
				else {
					i++;
					tmp[i] = tmp[i - 1];
				}
			}
			return res;
		},
		/**
		 * dfs way
		 */
		dfsCombine: function(res, tmp, start, n, k) {
			if (k === 0) {
				res.push(tmp.slice(0));
				return;
			}
			for (var i = start; i + k <= n + 1; i++) {
				tmp.push(i);
				this.dfsCombine(res, tmp, i + 1, n, k - 1);
				tmp.pop();
			}
		},
		combine2: function(n, k) {
			var res = [];
			var tmp = [];
			this.dfsCombine(res, tmp, 1, n, k);
			return res;
		},
		/*
		 *
		 *     240. Search a 2D Matrix II
		 *
		 */
		/**
		 * @param {number[][]} matrix
		 * @param {number} target
		 * @return {boolean}
		 */
		searchMatrix2: function(matrix, target) {
			var m = matrix.length;
			var n = matrix[0].length;
			var i, j;
			if (m > n) {
				i = 0;
				j = n - 1;
				while (j > -1 && i < m) {
					if (matrix[i][j] == target) return true;
					else if (matrix[i][j] > target) j--;
					else i++;
				}
			} else {
				i = m - 1;
				j = 0
				while (i > -1 && j < n) {
					if (matrix[i][j] == target) return true;
					else if (matrix[i][j] > target) i--;
					else j++;
				}
			}
			return false;
		},
		/*
		 *
		 *     80. Remove Duplicates from Sorted Array II
		 *
		 */
		/**
		 * @param {number[]} nums
		 * @return {number}
		 */
		removeDuplicates: function(nums) {
			var count = 0;
			for (var i = 2; i < nums.length; i++) {
				if (nums[i] == nums[i - 2 - count]) count++;
				else nums[i - count] = nums[i];
			}
			nums.length -= count;
			return nums.length;
		},
		/*
		 *
		 *     109. Convert Sorted List to Binary Search Tree
		 *
		 */
		sortedListToBST: function(head) {
			if (head === null) return null;
			if (head.next === null) return new TreeNode(head.val);
			var slow = head,
				fast = head;
			var pre = new ListNode(0);
			pre.next = head;
			while (fast && fast.next) {
				slow = slow.next;
				pre = pre.next;
				fast = fast.next.next;
			}
			var root = new TreeNode(slow.val);
			var right = slow.next;
			slow.next = null;
			pre.next = null;
			root.left = sortedListToBST(head);
			root.right = sortedListToBST(right);
			return root;
		},
		/*
		 *
		 *     130. Surrounded Regions
		 *
		 */
		/**
		 * @param {character[][]} board
		 * @return {void} Do not return anything, modify board in-place instead.
		 */
		solve: function(board) {
			var x, y;
			var m = board.length;
			if (m === 0) return;
			var n = board[0].length;
			for (x = 0; x < m; x++) {
				check(board, x, 0, m, n);
				if (n > 1) check(board, x, n - 1, m, n);
			}
			for (y = 0; y < n; y++) {
				check(board, 0, y, m, n);
				if (m > 1) check(board, m - 1, y, m, n);
			}
			for (x = 0; x < m; x++) {
				for (y = 0; y < n; y++) {
					if (board[x][y] === "O") board[x][y] = "X";
				}
			}
			for (x = 0; x < m; x++) {
				for (y = 0; y < n; y++) {
					if (board[x][y] === "1") board[x][y] = "O";
				}
			}
		},
		check: function(board, x, y, m, n) {
			if (board[x][y] === "O") {
				board[x][y] = "1";
				if (x > 1) check(board, x - 1, y, m, n);
				if (y > 1) check(board, x, y - 1, m, n);
				if (x < m - 1) check(board, x + 1, y, m, n);
				if (y < n - 1) check(board, x, y + 1, m, n);
			}
		},
		/*
		 *
		 *     93. Restore IP Addresses
		 *
		 */
		/**
		 * @param {string} s
		 * @return {string[]}
		 */
		restoreIpAddresses: function(s) {
			var first, second, third;
			var s1, s2, s3, s4;
			var length = s.length;
			if (length < 4 || length > 12) return [];
			var res = [];
			for (first = 1; first < 4; first++) {
				s1 = s.substring(0, first);
				if (s1[0] === "0" && s1.length > 1) continue;
				if (parseInt(s1) < 256) {
					for (second = first + 1; second < length && second < first + 4; second++) {
						s2 = s.substring(first, second);
						if (s2[0] === "0" && s2.length > 1) continue;
						if (parseInt(s2) < 256) {
							for (third = second + 1; third < length && third < second + 4; third++) {
								s3 = s.substring(second, third);
								if (s3[0] === "0" && s3.length > 1) continue;
								if (parseInt(s3) < 256) {
									s4 = s.substring(third);
									if (s4[0] === "0" && s4.length > 1) continue;
									if (parseInt(s4) < 256) res.push(s1 + "." + s2 + "." + s3 + "." + s4);
								}
							}
						}
					}
				}
			}
			return res;
		},
		/*
		 *
		 *     33. Search in Rotated Sorted Array
		 *
		 */
		/**
		 * @param {number[]} nums
		 * @param {number} target
		 * @return {number}
		 */
		searchInRotateArray: function(nums, target) {
			var l = 0,
				h = nums.length - 1;
			var mid;
			while (l <= h) {
				mid = Math.round((l + h) / 2);
				if (nums[mid] === target) return mid;
				else if (
					(nums[mid] >= nums[l] && (target < nums[l] || target > nums[mid])) ||
					(nums[mid] < nums[l] && target > nums[mid] && target <= nums[h])
				) l = mid + 1;
				else h = mid - 1;
			}
			return -1;
		},
		/*
		 *
		 *     319. Bulb Switcher
		 *
		 */
		/**
		 * @param {number} n
		 * @return {number}
		 */
		bulbSwitch: function(n) {
			var count = 0;
			for (var i = 1; i * i <= n; i++) {
				count++;
			}
			return count;
		},
		/*
		 *
		 *     289. Game of Life
		 *
		 */
		/**
		 * @param {number[][]} board
		 * @return {void} Do not return anything, modify board in-place instead.
		 */
		countLives: function(board, x, y, m, n) {
			var count = -board[x][y];
			for (var i = Math.max(x - 1, 0); i <= Math.min(x + 1, m - 1); i++) {
				for (var j = Math.max(y - 1, 0); j <= Math.min(y + 1, n - 1); j++) {
					count += (board[i][j] & 1);
				}
			}
			return count;
		},
		gameOfLife: function(board) {
			var m = board.length;
			if (m === 0) return;
			var n = board[0].length;
			for (var i = 0; i < m; i++) {
				for (var j = 0; j < n; j++) {
					var lives = countLives(board, i, j, m, n);
					if (board[i][j] === 1) {
						if (lives >= 2 && lives <= 3) board[i][j] = 3;
					} else {
						if (lives === 3) board[i][j] = 2;
					}
				}
			}
			for (var i = 0; i < m; i++) {
				for (var j = 0; j < n; j++) {
					board[i][j] >>= 1;
				}
			}
		},
		/*
		 *
		 *     306. Additive Number
		 *
		 */
		/**
		 * @param {string} num
		 * @return {boolean}
		 */
		isAdditiveNumber: function(num) {
			var l = num.length;
			if (l < 3) return false;
			return this.isSubAdditiveNumber(num, l, 0, 1, 1);
		},
		isSubAdditiveNumber: function(num, length, start, sublength1, sublength2) {
			var sub, res;
			var maxl1 = num[start] === "0" ? 1 : length - start - sublength2 - 1;
			for (var l1 = sublength1; l1 <= maxl1; l1++) {
				for (var l2 = sublength2; start + l1 + l2 <= length - 1; l2++) {
					if (num[start + l1] === "0" && l2 > 1) continue;
					// num1 = parseInt(num.substr(start, l1));
					// num2 = parseInt(num.substr(start + l1, l2));
					// num3 = num1 + num2;
					// sub = num3.toString();
					sub = (parseInt(num.substr(start, l1)) + parseInt(num.substr(start + l1, l2))).toString();
					res = num.substr(start + l1 + l2);
					if (res.indexOf(sub) === 0) {
						if (l1 + l2 + sub.length + start === length || (this.isSubAdditiveNumber(num, length, start + l1, l2, sub.length))) return true;
					}
				}
			}
			return false;
		},
		/*
		 *
		 *     347. Top K Frequent Elements
		 *
		 */
		/**
		 * @param {number[]} nums
		 * @param {number} k
		 * @return {number[]}
		 */
		topKFrequent: function(nums, k) {
			var hash = {};
			var i;
			for (i = 0; i < nums.length; i++) {
				if (hash[nums[i]] === undefined) hash[nums[i]] = 1;
				else hash[nums[i]]++;
			}
			var queue = [];
			i = 0;
			for (var prop in hash) {
				queue[i] = [parseInt(prop), parseInt(hash[prop])];
				i++;
			}
			queue.sort(function(a, b) {
				if (a[1] > b[1]) return -1;
				else if (a[1] < b[1]) return 1;
				else return 0;
			})
			var res = [];
			for (i = 0; i < k; i++) {
				res[i] = queue[i][0];
			}
			return res;
		},
		/*
		 *
		 *     229. Majority Element II
		 *
		 */
		/**
		 * @param {number[]} nums
		 * @return {number[]}
		 */
		majorityElement: function(nums) {
			var count1 = 0,
				count2 = 0,
				a = 0,
				b = 1;
			var res = [];
			for (var i = 0; i < nums.length; i++) {
				if (a === nums[i]) count1++;
				else if (b === nums[i]) count2++;
				else if (count1 === 0) {
					a = nums[i];
					count1 = 1;
				} else if (count2 === 0) {
					b = nums[i];
					count2 = 1;
				} else {
					count1--;
					count2--;
				}

			}
			count1 = count2 = 0;
			for (var i = 0; i < nums.length; i++) {
				if (a === nums[i]) count1++;
				else if (b === nums[i]) count2++;
			}
			if (count1 > Math.min(nums.length / 3)) res.push(a)
			if (count2 > Math.min(nums.length / 3)) res.push(b);
			return res;
		},
		/*
		 *
		 *     334. Increasing Triplet Subsequence
		 *
		 */
		/**
		 * @param {number[]} nums
		 * @return {boolean}
		 */
		increasingTriplet: function(nums) {
			if (nums.length < 3) return false;
			var min1 = Number.MAX_VALUE;
			var min2 = Number.MAX_VALUE;
			for (var i = 0; i < nums.length; i++) {
				var t = nums[i];
				if (t <= min1) {
					min1 = t;
				} else if (t <= min2) {
					min2 = t;
				} else {
					return true;
				}
			}
			return false;
		},
		/*
		 *
		 *     280. Wiggle Sort
		 *
		 */
		/**
		 * @param {number[]} nums
		 * @return {void} Do not return anything, modify nums in-place instead.
		 */
		wiggleSort: function(nums) {
			for (var i = 1; i < nums.length; i++) {
				if (((i & 1) && nums[i] < nums[i - 1]) || (!(i & 1) && nums[i] > nums[i - 1])) {
					var t = nums[i];
					nums[i] = nums[i - 1];
					nums[i - 1] = t;
				}
			}
		},
		/*
		 *
		 *     318. Maximum Product of Word Lengths
		 *
		 */
		/**
		 * @param {string[]} words
		 * @return {number}
		 */
		maxProduct: function(words) {
			var l = words.length;
			var res = 0
			if (l < 2) return res;
			var mask = [];
			var word;
			var charMap = {
				"a": 0,
				"b": 1,
				"c": 2,
				"d": 3,
				"e": 4,
				"f": 5,
				"g": 6,
				"h": 7,
				"i": 8,
				"j": 9,
				"k": 10,
				"l": 11,
				"m": 12,
				"n": 13,
				"o": 14,
				"p": 15,
				"q": 16,
				"r": 17,
				"s": 18,
				"t": 19,
				"u": 20,
				"v": 21,
				"w": 22,
				"x": 23,
				"y": 24,
				"z": 25
			};
			for (var i = 0; i < l; i++) {
				mask[i] = 0;
				word = words[i];
				for (var j = 0; j < word.length; j++) {
					mask[i] |= 1 << charMap[word[j]];
				}
			}
			for (i = 0; i < l; i++) {
				for (j = i + 1; j < l; j++) {
					if ((mask[i] & mask[j]) === 0) res = Math.max(res, words[i].length * words[j].length);
				}
			}
			return res;
		}

	})

	window.l = window.lCode = lCode;
})(window)
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
		}
	})

	window.l = window.lCode = lCode;
})(window)
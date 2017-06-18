/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSum = function(nestedList) {
  if (nestedList.length === 0) return 0;
  let queue = [];
  for (let item of nestedList) queue.push(item);
  let sum = 0,
    level = 0,
    size = 0;
  while (queue.length !== 0) {
    level++;
    size = queue.length;
    while (size--) {
      let front = queue.shift();
      if (front.isInteger()) {
        sum += front.getInteger() * level;
      } else {
        for (let item of front.getList()) queue.push(item);
      }
    }
  }
  return sum;
};
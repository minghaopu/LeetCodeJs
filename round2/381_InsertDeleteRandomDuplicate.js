/**
 * Initialize your data structure here.
 */
Array.prototype.back = function() {
    return this[this.length - 1];
}
var RandomizedCollection = function() {
    this.map = {}; // val -> indices [];
    this.nums = []; // [[val, idx in indices]]; 
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    let res = false
    if (this.map[val] === undefined) {
        res = true;
        this.map[val] = [];
    }
    this.map[val].push(this.nums.length);
    this.nums.push([val, this.map[val].length - 1]);
    return res;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    let res = this.map[val] !== undefined;
    if (res) {
        let last = this.nums.back();
        let lastVal = last[0], lastPosInMap = last[1];
        this.map[lastVal][lastPosInMap] = this.map[val].back();
        this.nums[this.map[val].back()] = last;
        this.map[val].pop();
        if (this.map[val].length === 0) delete this.map[val];
        this.nums.pop();
    }
    return res;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    return this.nums[Math.floor(Math.random() * this.nums.length)][0];
};

/** 
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = Object.create(RandomizedCollection).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
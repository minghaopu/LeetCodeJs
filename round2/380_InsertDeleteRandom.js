/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.cache = {}; // val -> node
    this.list = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.cache[val] !== undefined) return false;
    this.cache[val] = this.list.length;
    this.list.push(val);
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.cache[val] === undefined) return false;
    let idx = this.cache[val];
    let last = this.list[this.list.length - 1];
    this.cache[last] = idx;
    this.list[idx] = last;
    this.list.pop();
    delete this.cache[val];
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let rand = Math.floor(Math.random() * this.list.length);
    return this.list[rand];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

let r = new RandomizedSet();
let ops = ["insert","remove","insert","getRandom","remove","insert","getRandom"]
let data = [[1],[2],[2],[],[1],[2],[]]
let res = [];
for (let i = 0; i < ops.length; i++) {
    switch (ops[i]) {
        case "insert":
            res.push(r.insert(data[i][0]));
            console.log("insert", data[i][0]);
            break;
        case "remove":
            res.push(r.remove(data[i][0]));
            break;
        default:
            res.push(r.getRandom());
    }
}
console.log(res);
/**
 * @constructor
 * @param {Integer[][]} vec2d
 */
var Vector2D = function(vec2d) {
    this.curIt = vec2d[Symbol.iterator]();
    this.it = vec2d[Symbol.iterator]();
    this.cur = -1;
    this.shift = 0;
    this.row = this.it.next();
    this.curRow = this.curIt.next();
};


/**
 * @this Vector2D
 * @returns {boolean}
 */
Vector2D.prototype.hasNext = function() {
    // let change = this.shift - this.row.value.length
    while (this.row.done === false && this.shift >= this.row.value.length) {
        this.row = this.it.next();
        this.shift = 0;
    }
    return this.row.done === false;
};

/**
 * @this Vector2D
 * @returns {integer}
 */
Vector2D.prototype.next = function() {
    if (this.shift === 0) {
        while (this.curRow.done === false && this.cur === this.curRow.value.length - 1) {
            this.curRow = this.curIt.next();
            this.cur = -1;
        }
    }
    this.cur++;
    return this.row.value[this.shift++];
};
/**
 * @this Vector2D
 * @returns {null if }
 */
Vector2D.prototype.remove = function() {
    if (this.cur === -1 || this.curRow.done === true) return null;
    while (this.curRow.done === false && this.cur >= this.curRow.value.length) {
        this.curRow = this.curIt.next();
        this.cur = 0;
    }
    return this.curRow.done ? null : this.curRow.value.splice(this.cur, 1)[0];
}
/**
 * Your Vector2D will be called like this:
 * var i = new Vector2D(vec2d), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
let nums = [
    [1, 2],
    [3],
    [4, 5, 6],
    [],
    [7]
];
let v = new Vector2D(nums);
let a = [];
let i = 0;
while (v.hasNext() && i++ < 10) {
    a.push(v.next());
    console.log(v.remove());
}
1,2
// while (v.hasNext()) a.push(v.next);
// console.log(a, nums);
/**
 * @constructor
 * @param {Integer[][]} vec2d
 */
var Vector2D = function(vec2d) {
    this.it = vec2d[Symbol.iterator]();
    this.shift = 0;
    this.row = this.it.next();
};


/**
 * @this Vector2D
 * @returns {boolean}
 */
Vector2D.prototype.hasNext = function() {
    while (this.row.done === false && this.shift === this.row.value.length) {
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
    return this.row.value[this.shift++];
};

/**
 * Your Vector2D will be called like this:
 * var i = new Vector2D(vec2d), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
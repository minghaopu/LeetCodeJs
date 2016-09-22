/**
 * @constructor
 */
var Queue = function() {
    this.sin = [];
    this.sout = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    this.sin.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    this.peek();
    this.sout.pop();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    if (this.sout.length === 0) {
    	while (this.sin.length !== 0) {
    		this.sout.push(this.sin[this.sin.length - 1]);
    		this.sin.pop();
    	}
    }
    return this.sout[this.sout.length - 1];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    return this.sin.length === 0 && this.sout.length === 0;
};

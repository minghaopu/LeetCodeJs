/**
 * initialize your data structure here.
 */
Array.prototype.top = function() {
    return this[this.length - 1];
}
var MinStack = function() {
    this.s1 = [];
    this.s2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.s1.push(x);
    if (this.s2.length === 0 || x <= this.s2.top()) this.s2.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.s2.top() === this.s1.top()) this.s2.pop();
    this.s1.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.s1.top();
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.s2.top();
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
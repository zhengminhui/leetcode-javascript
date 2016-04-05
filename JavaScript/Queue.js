/**
 * @constructor
 */
var Queue = function() {
    this.stack = [];
    this.tmp = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    while(this.stack.length > 1){
        this.tmp.push(this.stack.pop());
    }
    this.stack.pop();
    while(this.tmp.length > 0){
        this.stack.push(this.tmp.pop());
    }
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    while(this.stack.length > 1){
        this.tmp.push(this.stack.pop());
    }
    var ele = this.stack.pop();
    this.tmp.push(ele);
    while(this.tmp.length > 0){
        this.stack.push(this.tmp.pop());
    }
    return ele;
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    if(this.stack === null) return true;
    return this.stack.length === 0;
    
};
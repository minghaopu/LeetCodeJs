/**
 * @param {number} capacity
 */
class DLinkedNode {
    constructor(key = null, value = null) {
        this.key = key;
        this.value = value;
        this.frequency = 0;
        this.pre = null;
        this.post = null;
    }
}

var LFUCache = function(capacity) {
    this.fmap = {}; // frequency -> {head, tail}
    this.kmap = {}; // k -> node;
    this.size = 0;
    this.capacity = capacity;
    this.minFreq = 0;
};
LFUCache.prototype.addNode = function(node) {
    let f = node.frequency;
    if (this.fmap[f] === undefined) {
        this.fmap[f] = {
            head: new DLinkedNode(),
            tail: new DLinkedNode()
        }
        this.fmap[f].head.post = this.fmap[f].tail;
        this.fmap[f].tail.pre = this.fmap[f].head;
    }
    let post = this.fmap[f].head.post;
    post.pre = node;
    node.post = post;

    node.pre = this.fmap[f].head;
    this.fmap[f].head.post = node;
}
LFUCache.prototype.removeNode = function(node) {
    let post = node.post;
    let pre = node.pre;
    pre.post = post;
    post.pre = pre;
    if (this.fmap[this.minFreq].head.post === this.fmap[this.minFreq].tail) this.minFreq++;
}



/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    let node = this.kmap[key];
    if (node === undefined) return -1;
    this.removeNode(node);
    this.kmap[key].frequency++;
    this.addNode(node);
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if (this.capacity <= 0) return;
    let node = this.kmap[key];
    if (node === undefined) {
        if (this.capacity === this.size) {
            let oldNode = this.fmap[this.minFreq].tail.pre;
            this.removeNode(oldNode);
            delete this.kmap[oldNode.key];
            oldNode = null;
            this.size--;
        }

        node = new DLinkedNode(key, value);
        node.frequency = 1;
        this.kmap[key] = node;
        this.minFreq = 1;
        this.size++;
    } else {
        this.kmap[key].value = value;
        this.kmap[key].frequency++;
        this.removeNode(node);
    }
    this.addNode(node);
};

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = Object.create(LFUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

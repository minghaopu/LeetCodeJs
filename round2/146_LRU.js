/**
 * @param {number} capacity
 */
class DLinkedNode {
    constructor(key = null, value = null) {
        this.key = key;
        this.value = value;
        this.pre = null;
        this.post = null;
    }
}

function addNode(node, head) {
    node.pre = head;
    node.post = head.post;
    head.post.pre = node;
    head.post = node;
}

function removeNode(node) {
    node.pre.post = node.post;
    node.post.pre = node.pre;
}
var LRUCache = function(capacity) {
    this.map = new Map();
    this.head = new DLinkedNode();
    this.tail = new DLinkedNode();
    this.head.post = this.tail;
    this.tail.pre = this.head;
    this.capacity = capacity;
    this.count = 0;
};

function moveToHead(node, head) {
    removeNode(node);
    addNode(node, head);
}
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.map.get(key);
    if (node === undefined) return -1;
    moveToHead(node, this.head);
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.map.get(key);
    if (node === undefined) {
        let newNode = new DLinkedNode(key, value);
        this.map.set(key, newNode);
        addNode(newNode, this.head);
        this.count++;
        if (this.count > this.capacity) {
            let lastNode = this.tail.pre;
            removeNode(lastNode);
            this.map.delete(lastNode.key);
            this.count--;
        }
    } else {
        node.value = value;
        moveToHead(node, this.head);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
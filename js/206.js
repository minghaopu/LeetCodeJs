/**
 * 206. Reverse Linked List
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var reverseList = function(head) {
	if (head === null) return null;
    var stack = [];
    while (head !== null) {
        stack.push(head.val);
        head = head.next;
    }
    var p = new ListNode(stack.pop());
    var l = p;
    while (stack.length !== 0) {
		p.next = new ListNode(stack.pop());
        p = p.next;
    }
    return l;
};

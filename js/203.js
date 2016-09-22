function ListNode(val) {
	this.val = val;
	this.next = null;
}
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
	if (head === null) return null;
	var psu_head = new ListNode();
	psu_head.next = head;
	var cur = psu_head;
	while (cur && cur.next) {
		if (cur.next.val === val) {
			cur.next = cur.next.next;
		} else {
			cur = cur.next;
		}
	}
	return psu_head.next;
};

var test = new ListNode(1);
test.next = new ListNode(1);
// test.next.next = new ListNode(3);
console.log(test);
console.log(removeElements(test, 1));
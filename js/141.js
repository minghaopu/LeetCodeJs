/**
 * 141. Linked List Cycle
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
 * @return {boolean}
 */
var hasCycle = function(head) {
	var fast = head,
		slow = head;
	while (fast && slow && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
		if (slow === fast) return true;
	}
	return false;
};
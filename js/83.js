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
var deleteDuplicates = function(head) {
	var pre = head;
	var cur = head;
	while (pre) {
		if (cur === null || cur.val !== pre.val) {
			pre.next = cur;
			pre = cur;
		} else cur = cur.next;
	}
	return head;
};
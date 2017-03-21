/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var carry = 0,val = 0;
    var head = new ListNode(0);
    var p = head;
    while (l1 !== null || l2 !== null || carry !== 0) {
        val = 0;
        if (l1 !== null && l2 !== null) {
            val = l1.val + l2.val + carry;
            l1 = l1.next;
            l2 = l2.next;
        } else if (l1 !== null) {
            val = l1.val + carry;
            l1 = l1.next;
        } else if (l2 !== null) {
            val = l2.val + carry;
            l2 = l2.next;
        } else if (carry !== 0) {
            val = carry;
        }
        p.next = new ListNode(val % 10);
        carry = Math.floor(val / 10);
        p = p.next;
    }
    return head.next;
};
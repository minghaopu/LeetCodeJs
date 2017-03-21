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
var mergeTwoLists = function(l1, l2) {
    if (!ListNode.prototype.isPrototypeOf(l1) && l1 !== null || !ListNode.prototype.isPrototypeOf(l2) && l2 !== null) return null;
    let head = new ListNode(0), p = head;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;
    }
    if (l1 !== null) p.next = l1;
    else if (l2 !== null) p.next = l2;
    return head.next;
};
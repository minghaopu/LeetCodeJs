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
var swapPairs = function(head) {
    if (!ListNode.prototype.isPrototypeOf(head) || head === null) return head;
    let newHead = new ListNode(0);
    newHead.next = head;
    let pre = newHead, p = head, next = null;
    while (ListNode.prototype.isPrototypeOf(p) && p !== null && ListNode.prototype.isPrototypeOf(p.next) && p.next !== null) {
        next = p.next;
        pre.next = next;
        p.next = next.next;
        next.next = p;
        pre = p;
        p = p.next;
    }
    return newHead.next;
};
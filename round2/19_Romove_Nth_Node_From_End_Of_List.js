/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!ListNode.prototype.isPrototypeOf(head) || typeof n !== "number" || head === null || n === 0) return head;
    let count = 0;
    let p = head, newHead = new ListNode(0), next = null;
    newHead.next = head;
    while (p !== null) {
        count++;
        p = p.next;
    }
    count -= n;
    p = newHead;
    while (count !== 0) {
        p = p.next;
        count--;
    }
    next = p.next;
    p.next = next.next;
    return newHead.next;
};
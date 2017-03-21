/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!ListNode.prototype.isPrototypeOf(head) || head === null || typeof k !== "number" || k < 2) return head;
    let newHead = new ListNode(0);
    newHead.next = head;
    let cur = head, pre = newHead, next = null, tmp = null;
    let count = 0;
    while (ListNode.prototype.isPrototypeOf(cur) && cur !== null) {
        cur = cur.next;
        count++;
    }
    while (count >= k) {
        cur = pre.next; // tail
        next = cur.next; // next node to reverse
        for (let i = 1; i < k; i++) {
            tmp = next.next;
            next.next = pre.next;
            pre.next = next;
            cur.next = tmp;
            next = tmp;
        }
        pre = cur;
        count -= k;
    }
    return newHead.next;
};
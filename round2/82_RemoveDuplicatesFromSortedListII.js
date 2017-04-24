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
    let newHead = new ListNode(0);
    newHead.next = head;
    let pre = newHead, p = head;
    while (p && p.next) {
        while (p.next && p.next.val === p.val) p = p.next;
        if (pre.next !== p) {
            pre.next = p.next;
            p = pre.next;
        } else {
            pre = p;
            p = p.next;
        }
    }
    return newHead.next;
};
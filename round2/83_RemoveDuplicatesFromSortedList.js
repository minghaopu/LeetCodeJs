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
    let pre = head, p = head;
    while (pre) {
        if (p === null || pre.val !== p.val) {
            pre.next = p;
            pre = p;
        } else p = p.next;
    }
    return head;
};
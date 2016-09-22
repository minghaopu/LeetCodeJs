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
    var newHead = new ListNode(0);
    newHead.next = head;
    var pre = newHead;
    while (head && head.next) {
        var tmp = head.next.next;
        pre.next = head.next;
        head.next.next = head;
        head.next = tmp;
        pre = head;
        head = tmp;
    }
    return newHead.next;
};
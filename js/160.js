/**
 * 160. Intersection of Two Linked List
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null) return null
    var la = headA, lb = headB;
    // while (la !== null || lb!== null) {
    //     if (la === lb) return la;
    //     if (la === null && lb !== null) la = headB;
    //     else if (la !== null && lb === null) lb = headA;
    //     else {
    //         la = la.next;
    //         lb = lb.next;
    //     }
    // }
    while (la !== lb) {
        la = la?la.next:headB;
        lb = lb?lb.next:headA;
    }
    return la;
};
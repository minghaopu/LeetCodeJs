/*
 *
 *     86. Partition List
 *
 */
function ListNode(val) {
	this.val = val;
	this.next = null;
}
var createList = function(array) {
	var head = new ListNode(0);
	var p = head;
	for (var i = 0; i < array.length; i++) {
		p.next = new ListNode(array[i]);
		p = p.next;
	}
	return head.next;
}
var partition = function(head, x) {
	var greater = new ListNode(0);
	var smaller = new ListNode(0);
	var p = greater;
	var q = smaller;
	while (head !== null) {
		var next = head.next;
		if (head.val < x) {
			q.next = head;
			q = q.next;
		} else {
			p.next = head;
			p = p.next;
		}
		head.next = null;
		head = next;

	}
	q.next = greater.next;
	return smaller.next;
};
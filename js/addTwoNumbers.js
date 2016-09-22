/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *	 this.val = val;
 *	 this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
	this.val = val;
	this.next = null;
}
var array1 = [5,9,6,7,0,0,8,1,7];

var array2 = [6,4,2,2,3,5,0,7,2,1];
function createList(array) {
	if(array.length>1) {
		if (array[array.length-1]===0) {
			array.length = array.length-1;
		}
	}
	var l = new ListNode(array[0]);
	var p = l;
	for(var i = 1; i < array.length; i++) {
		var v = new ListNode(array[i]);
		p.next = v;
		p = p.next;
	}
	return l;
}
var l1 = createList(array1);
var l2 = createList(array2);

var addTwoNumbers = function(l1, l2) {
	var p1 = l1;
	var p2 = l2;
	var resultList = new ListNode(0);
	var resultPointer = resultList;
	while (p1.next!==null&&p2.next!==null) {
		resultPointer.val = p1.val + p2.val + resultPointer.val;
		if (resultPointer.val > 9) {
			resultPointer.val -= 10
			resultPointer.next = new ListNode(1);
		} else{
			resultPointer.next = new ListNode(0);
		}
		p1 = p1.next;
		p2 = p2.next;	
		resultPointer = resultPointer.next;
	}

	resultPointer.val = p1.val + p2.val + resultPointer.val;
	if (resultPointer.val > 9) {
		resultPointer.val -= 10;
		resultPointer.next = new ListNode(1);
	}

	p1 = p1.next;
	p2 = p2.next;

	if (p2 !== null) {

		if (resultPointer.next === null) resultPointer.next = new ListNode(0);
		resultPointer = resultPointer.next;

		while(p2.next!==null) {
			resultPointer.val = p2.val + resultPointer.val;
			if (resultPointer.val > 9) {
				resultPointer.val -= 10;
				resultPointer.next = new ListNode(1);
			} else {
				resultPointer.next = new ListNode(0);
			}
			p2 = p2.next;
			resultPointer = resultPointer.next;
		}
		resultPointer.val = p2.val + resultPointer.val;
		if (resultPointer.val > 9) {
			resultPointer.val -= 10;
			resultPointer.next = new ListNode(1);
		}
	} else if (p1 !== null) {

		if (resultPointer.next === null) resultPointer.next = new ListNode(0);
		resultPointer = resultPointer.next;

		while (p1.next!==null) {
			resultPointer.val = p1.val + resultPointer.val;
			if (resultPointer.val > 9) {
				resultPointer.val -= 10;
				resultPointer.next = new ListNode(1);
			} else {
				resultPointer.next = new ListNode(0);
			}
			p1 = p1.next;
			resultPointer = resultPointer.next;
		}
		resultPointer.val = p1.val + resultPointer.val;
		if (resultPointer.val > 9) {
			resultPointer.val -= 10;
			resultPointer.next = new ListNode(1);
		}
	}

	return resultList;
};

var addTwoNumbers2 = function(l1, l2) {
	var p1 = l1;
	var p2 = l2;
	var resultArray = [0];
	var index = 0;
	while (p1!==null&&p2!==null) {
		resultArray[index] = p1.val + p2.val + resultArray[index];
		if (resultArray[index] > 9) {
			resultArray[index] -= 10;
			resultArray[index+1] = 1;
		} else{
			resultArray[index+1] = 0;
		}
		p1 = p1.next;
		p2 = p2.next;
		index++;
	}
	var p = (p1 === null)?p2:p1;
	while (p!==null) {
		resultArray[index] = p.val + resultArray[index];
		if (resultArray[index] > 9) {
			resultArray[index] -= 10;
			resultArray[index+1] = 1;
		} else{
			resultArray[index+1] = 0;
		}
		p = p.next;
		index++;
	}
	return createList(resultArray);
};
function test(al,l1,l2){
	var d1 = new Date();
	al(l1,l2);
	var d2 = new Date();
	return (d2-d1);
}
console.log(1,test(addTwoNumbers,l1,l2));
console.log(2,test(addTwoNumbers2,l1,l2));


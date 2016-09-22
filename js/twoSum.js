/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var nums = [150,24,79,50,88,345,3];
var target = 200;

var twoSum = function(nums, target) {
    var length = nums.length;
    var rest = 0;
    var sortedNums = nums.slice(0);
    heapSort(sortedNums, sortedNums.length);
    for(var index1 = 0, index2 = -1; index1 <length-1; index1++) {
        rest = target - sortedNums[index1];
        index2 = binarySearch(sortedNums, rest, index1+1, length-1);
        if(index2 !== -1) break;
    }
    for (var i = 0; i < nums.length; i++) {
        if(nums[i] === sortedNums[index1]) {
            index1 = i;
            break;
        }
    }
    for (var i = 0; i < nums.length; i++) {
        if(nums[i] === sortedNums[index2] && i !== index1) {
            index2 = i;
            break;
        }
    }
    return index1<index2?([index1+1, index2+1]):([index2+1,index1+1]);
};
var heapSort = function(array, heapSize) {
    buidMaxHeap(array);
    for (var i = heapSize-1; i > 0; i--) {
        exchangePosition(0, i, array);
        heapSize--;
        maxHeapify(array, 0, heapSize);
    }
};
var buidMaxHeap = function(array) {
    var start = Math.floor(array.length/2)-1;
    for (var i = start; i > -1; i--) {
        maxHeapify(array, i, array.length);
    }
};
var maxHeapify = function(array, index, heapSize) {
    var largest = index;
    var left = 2*index+1;
    var right = left+1;
    if (array[index] < array[left] && left <= heapSize-1) {
        largest = left;
    }
    if(array[largest] < array[right] && right <= heapSize-1) {
        largest = right;
    }
    if (largest == index) return;
    exchangePosition(index, largest, array);
    return maxHeapify(array, largest, heapSize);
};
var exchangePosition = function(index1, index2, array) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};
var binarySearch = function(array, target, start, end) {
    if (end < 0 || start > end) {
        return -1;
    }
    var mid = start + Math.floor((end-start)/2);
    if (target == array[mid]) {
        return mid;
    } else if (target < array[mid]) {
        end = mid-1;
    } else {
        start = mid+1;
    }
    return binarySearch(array, target, start, end);
};
var violentSearch = function(array, target) {
    for (var i = 0; i < array.length; i++) {
        if(array[i] === target) return i;
    }
}


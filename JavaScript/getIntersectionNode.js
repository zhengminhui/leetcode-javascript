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
 * method 1
 * After iterate itself, switch head and iterate the other again can conteract the difference of length, so these two lists will intersect in the end if they have same node, otherwise they both equal null and return h1(null).
 * method 2
 * get the length and move one len(a)-len(b) steps forward and check if they have same node.
 */
var getIntersectionNode = function(headA, headB) {
    var h1 = headA,
        h2 = headB;
    if (h1 === null || h2 === null) {
        return null;
    }
    while (h1 != h2) {
        h1 = h1 === null ? headB : h1.next;
        h2 = h2 === null ? headA : h2.next;
    }
    return h1;

    // // method2
    // var lenA = 0,
    //     lenB = 0;
    // while(h1){
    //     h1 = h1.next;
    //     lenA++;
    // }
    // while(h2){
    //     h2 = h2.next;
    //     lenB++;
    // }
    // h1 = headA,
    // h2 = headB;
    // while(lenA > lenB){
    //     h1 = h1.next;
    //     lenA--;
    // }
    // while(lenB > lenA){
    //     h2 = h2.next;
    //     lenB--;
    // }
    // while(h1 !== h2){
    //     h1 = h1.next;
    //     h2 = h2.next;
    // }
    // return h2;
};
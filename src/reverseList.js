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
 * reverse of null: null
 * reverse of one element: the element
 * reverse of an n element list: reverse of the second element followed by the first element
 */
var reverseList = function(head) {
    // // iteration
    // var pre = null,cur = head,nxt;
    // while (cur){
    //     nxt = cur.next;
    //     cur.next = pre;
    //     pre = cur;
    //     cur = nxt;
    // }
    // return pre;

    // recurrsive
    if (!head || !head.next) return head;
    var secondElem = head.next;
    head.next = null;
    var reverseRest = reverseList(secondElem);
    secondElem.next = head;
    return reverseRest;


};
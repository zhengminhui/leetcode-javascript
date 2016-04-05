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

    var dummy = new ListNode(0),
        cur = head,
        pre,
        tmp;
    dummy.next = head;
    pre = dummy;
    if (head === null) return head;
    while (cur !== null && cur.next !== null) {
        // save the third node
        tmp = cur.next.next;

        // connect second node's next to first node
        cur.next.next = pre.next;

        // connect dummy node's to the second node 
        pre.next = cur.next;

        // connect fisrt node's next to tmp
        cur.next = tmp;

        // move right one step 
        pre = cur;
        cur = cur.next;

    }
    return dummy.next;
};

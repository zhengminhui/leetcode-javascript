/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * Techonically We need two dummy heads. One to point to head, and the other one used to iterate list.
 * Be careful when the first element is the value we need to remove, so dont' return head. return dummy.next instead. That's also why we need two dummy heads. 
 * If we don't use dummy head, we need to handle the head. while(head !== null and head.val !== val) head= head.next; Buy this way we can strip this situation that the very head is equal to val.
 * Recurrsive: peel the head every time if head is equal to val.
 * Time O(n) Space O(1)
 */
var removeElements = function(head, val) {
    // // dummy head
    if (head === null) return head;
    var dummy = new ListNode(0);
    dummy.next = head;
    var curr = dummy;
    while (curr && curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return dummy.next;

    // // without dummy head
    while (head && head.val === val) {
        head = head.next;
    }
    var curr = head;
    while (curr && curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;

    // recurrsive 
    if (head === null) return head;
    head.next = removeElements(head.next, val);
    return head.val === val ? head.next : head;



};

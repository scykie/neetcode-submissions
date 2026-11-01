/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
       let  [prev, cur] = [null, head]

       while(cur){
        let next = cur.next
        cur.next = prev
        prev = cur
        cur = next
       }

       return prev
    }
}

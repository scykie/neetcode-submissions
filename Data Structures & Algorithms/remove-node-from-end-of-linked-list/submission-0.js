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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummy = new ListNode(0, head)
        let [s, f] = [head, head]

        for(let i=0; i<n; i++){
            f= f.next
        }

        let prev = dummy
        while(f){
            prev = s
            s = s.next
            f = f.next
        }

        prev.next = s.next
        
        return dummy.next
    }
}

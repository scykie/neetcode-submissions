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
     * @return {boolean}
     */
    hasCycle(head) {
        let [s, f] = [head, head]

        while(f && f.next){
            s = s.next
            f = f.next.next

            if(s === f) return true
        }

        return false
    }
}

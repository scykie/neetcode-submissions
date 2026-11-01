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
     * @return {void}
     */
    reorderList(head) {
        head = this.rec(head, head.next)
    }

    rec(root, cur){
        if(cur === null){
            return root
        }

        root = this.rec(root, cur.next) // get the root at current step 

        // null guard
        if (root === null) {
            return null;
        }

        if(root === cur || root.next === cur){
            cur.next = null // end the list
            return null
        }

        const tmp = root.next
        // add current in middle of root , root.next
        root.next = cur 
        cur.next = tmp 

        return tmp
    }
}

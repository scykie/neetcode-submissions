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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (!lists.length) return null;

        const dummy = new ListNode();
        let tail = dummy;
        const queue = new MinPriorityQueue((a) => a.val);

        for (let head of lists) {
            if (head) queue.push(head);
        }

        while (queue.size()) {
            const node = queue.pop();
            

            // Save next node before modifying links
            if (node.next) {
                queue.push(node.next);
            }

            tail.next = node;
            tail = node;
            tail.next = null

        }

        return dummy.next;
    }
}

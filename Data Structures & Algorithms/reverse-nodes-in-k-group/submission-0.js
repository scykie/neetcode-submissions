
class Solution {
    reverseBetween(head, left, right) {
        const dummy = new ListNode(0, head);
        let prev = dummy;

        for (let i = 0; i < left - 1; i++) {
            prev = prev.next;
        }

        let cur = prev.next;

        for (let i = 0; i < right - left; i++) {
            let next = cur.next;

            cur.next = next.next;
            next.next = prev.next;
            prev.next = next;
        }

        return dummy.next;
    }

    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        if (!head || k <= 1) return head;

        let dummy = new ListNode(0, head);
        let prevGroup = dummy;

        while (true) {
            let kth = prevGroup;

            // Check whether k nodes are available
            for (let i = 0; i < k && kth; i++) {
                kth = kth.next;
            }

            if (!kth) break;

            const nextGroup = kth.next;

            // Reverse current group
            const groupHead = prevGroup.next;
            let prev = nextGroup;
            let cur = groupHead;

            while (cur !== nextGroup) {
                const next = cur.next;
                cur.next = prev;
                prev = cur;
                cur = next;
            }

            // Connect reversed group
            prevGroup.next = kth;
            prevGroup = groupHead;
        }

        return dummy.next;
    }
}

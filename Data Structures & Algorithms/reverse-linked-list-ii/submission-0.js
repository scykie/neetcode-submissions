class Solution {
    reverseBetween(head, left, right) {
        const dummy = new ListNode(0, head);
        let prev = dummy;

        // Reach the node before left
        for (let i = 0; i < left - 1; i++) {
            prev = prev.next;
        }

        let cur = prev.next;

        // Head insertion technique
        for (let i = 0; i < right - left; i++) {
            let next = cur.next;

            cur.next = next.next;
            next.next = prev.next;
            prev.next = next;
        }

        return dummy.next;
    }
}
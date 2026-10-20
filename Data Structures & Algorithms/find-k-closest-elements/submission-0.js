class Solution {
    // sliding window only
    findClosestElements(arr, k, x) {
        let l = 0;
        let r = arr.length - 1;

        // when the window is more than the required, we have 2 options 
        // either shrink it from start or end. 
        while (r - l + 1 > k) {
            if (Math.abs(arr[l] - x) > Math.abs(arr[r] - x)) {
                l++;
            } else {
                r--;
            }
        }

        return arr.slice(l, r + 1);
    }

    // uses binary search
    findClosestElementsBinary(arr, k, x) {
        let l = 0;
        let r = arr.length - k;

        while (l < r) {
            const mid = Math.floor((l + r) / 2);

            if (x - arr[mid] > arr[mid + k] - x) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }

        return arr.slice(l, l + k);
    }
}

class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const stack = [];

        for (const dir of path.split("/")) {
            if (dir === "" || dir === ".") {
                continue;
            }

            if (dir === "..") {
                stack.pop();
            } else {
                stack.push(dir);
            }
        }

        return "/" + stack.join("/");
    }
}

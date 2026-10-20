class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const adj = new Array(n).fill([])
        const visited = {}
        let isLoop = false

        function dfs(ver, prev) {
            if (visited[ver])
                return
            visited[ver] = true
            for (let node of adj[ver]) {
                if (node != prev && visited[node]) {
                    isLoop = true
                    return
                } else
                    dfs(node, ver)
            }
        }

        for (let edge of edges) {
            adj[edge[0]] = [...adj[edge[0]], edge[1]]
            adj[edge[1]] = [...adj[edge[1]], edge[0]]
        }

        dfs(0, null)
        console.log(isLoop, Object.keys(visited).length)
        return !isLoop && Object.keys(visited).length === n
    }
}

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adj = new Array(n).fill([])
        const visited = new Array(n).fill(false)
        let count = 0
        function dfs(node){
            if(visited[node]) return
            visited[node] = true
            for(let n of adj[node]){
                dfs(n)
            }
        }
        for (let edge of edges) {
            adj[edge[0]] = [...adj[edge[0]], edge[1]]
            adj[edge[1]] = [...adj[edge[1]], edge[0]]
        }
        let isUnvisited = 0
        while(isUnvisited > -1){
            dfs(isUnvisited)
            count++
            isUnvisited = visited.findIndex((node)=>!node)
        }
        return count
    }
}

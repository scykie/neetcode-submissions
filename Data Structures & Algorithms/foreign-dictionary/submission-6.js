class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        const adj = {};
        for(let word of words){
            for(let ch of word){
                if(!adj[ch])adj[ch] = new Set()
            }
        }

        for(let i=0; i < words.length-1 ; i++){
            const [w1, w2] = [words[i], words[i+1]]
            if((w1.length > w2.length) && (w1.slice(0,w2.length) == w2.slice(0,w2.length))) return ""
            let j = 0;
            while(w1[j] && w2[j]){
                if(w1[j]!==w2[j]){
                    adj[w1[j]].add(w2[j]) 
                    break;
                }
                j++
            }
        }

        let result = [];
        const visited = {};
        function dfs(w){
            if(w in visited) return visited[w]
            visited[w] = true
            for(let n of adj[w]){
                if(dfs(n)) return true
            }
            result.unshift(w)
            visited[w] = false
        }

        for(let w in adj){
            if(dfs(w))return ""
        }

        return result.join("");
    }
}

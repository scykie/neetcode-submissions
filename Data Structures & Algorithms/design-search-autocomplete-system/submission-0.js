class TrieNode {
    constructor(){
        this.children = new Map()
        this.sentences = new Map()
    }
}

class AutocompleteSystem {
    /**
     * @param {string[]} sentences
     * @param {number[]} times
     */
    constructor(sentences, times) {
        this.root = new TrieNode()
        this.currSentence = []
        this.currNode = this.root
        this.dead = new TrieNode()

        // build trie 
        // n = no. of sentences
        // l = length of sentence
        // O (n.l)
        for(let i=0; i < sentences.length; i++){
            this.addToTrie(sentences[i], times[i])
        }
    }

    /**
     * @param {character} c
     * @return {string[]}
     */
    input(c) {
        // sentence is complete
        if(c === '#'){
            // incr 1 occurence 
            this.addToTrie(this.currSentence.join(''), 1)
            // reset 
            this.currNode = this.root
            this.currSentence = []
            // return suggestion 
            return []
        }

        // add character to sentence
        this.currSentence.push(c);

        // if c is not in the trie
        if(!this.currNode.children.has(c)){
            // does not match further
            this.currNode = this.dead
            return []
        }

        this.currNode = this.currNode.children.get(c)
        const matches = Array.from(this.currNode.sentences.keys())

        // sort matches
        // O(n.logn)
        matches.sort((a, b)=>{
            const freqA = this.currNode.sentences.get(a);
            const freqB = this.currNode.sentences.get(b);

            if (freqA === freqB) {
                return a.localeCompare(b); // lexicographical order
            }
            return freqB - freqA; // higher frequency first
        })

        // get top 3 matches
        return matches.slice(0,3)
    }

    addToTrie(sentence, count){
        let node = this.root

        for(let ch of sentence){
            if(!node.children.has(ch)){
                node.children.set(ch, new TrieNode())
            }
            node = node.children.get(ch)
            node.sentences.set(
                sentence,
                (node.sentences.get(sentence) || 0) + count
            )
        }
    }
}

/**
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */

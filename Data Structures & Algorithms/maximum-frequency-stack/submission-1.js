
class FreqStack {
    constructor() {
        this.maxfreq = 0;
        this.stacks = {};
        this.counts = {};
    }

    push(val) {
        this.counts[val] = (this.counts[val] || 0) + 1;

        const freq = this.counts[val];

        (this.stacks[freq] ||= []).push(val);

        this.maxfreq = Math.max(this.maxfreq, freq);
    }

    pop() {
        const stack = this.stacks[this.maxfreq];
        const val = stack.pop();

        this.counts[val]--;

        if (stack.length === 0) {
            this.maxfreq--;
        }

        return val;
    }
}

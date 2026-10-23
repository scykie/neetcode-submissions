class Twitter {
    constructor() {
        this.posts = {};
        this.followers = {};
        this.count = 0;
    }

    postTweet(userId, tweetId) {
        this.count++;

        if (!this.posts[userId]) {
            this.posts[userId] = [];
        }

        this.posts[userId].push([this.count, tweetId]);
    }

    getNewsFeed(userId) {
        const feed = [];

        // Include the user's own tweets and followed users
        const fwrs = [
            userId,
            ...(this.followers[userId] || [])
        ];

        const maxPriorityQ = new MaxPriorityQueue(
            (tweet) => tweet[0]
        );

        // Add the newest tweet from each user
        for (const fwr of fwrs) {
            const posts = this.posts[fwr] || [];
            const ptr = posts.length - 1;

            if (ptr >= 0) {
                const [timestamp, tweetId] = posts[ptr];

                maxPriorityQ.enqueue([
                    timestamp,
                    tweetId,
                    fwr,
                    ptr
                ]);
            }
        }

        // Extract the 10 most recent tweets
        while (!maxPriorityQ.isEmpty() && feed.length < 10) {
            const [timestamp, tweetId, fwr, ptr] =
                maxPriorityQ.dequeue();

            feed.push(tweetId);

            // Add the next older tweet from this user
            const nextPtr = ptr - 1;

            if (nextPtr >= 0) {
                const [t, id] = this.posts[fwr][nextPtr];

                maxPriorityQ.enqueue([
                    t,
                    id,
                    fwr,
                    nextPtr
                ]);
            }
        }

        return feed;
    }

    follow(followerId, followeeId) {
        if (!this.followers[followerId]) {
            this.followers[followerId] = new Set();
        }

        this.followers[followerId].add(followeeId);
    }

    unfollow(followerId, followeeId) {
        this.followers[followerId]?.delete(followeeId);
    }
}
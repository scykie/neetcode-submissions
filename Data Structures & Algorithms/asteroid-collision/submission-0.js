
class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];

        for (const ast of asteroids) {
            let alive = true;

            while (
                alive &&
                stack.length > 0 &&
                stack[stack.length - 1] > 0 &&
                ast < 0
            ) {
                const top = stack[stack.length - 1];

                if (top < Math.abs(ast)) {
                    stack.pop();
                } else if (top === Math.abs(ast)) {
                    stack.pop();
                    alive = false;
                } else {
                    alive = false;
                }
            }

            if (alive) {
                stack.push(ast);
            }
        }

        return stack;
    }
}

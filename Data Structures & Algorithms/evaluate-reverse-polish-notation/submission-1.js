
class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (const token of tokens) {
            if (
                token === "+" ||
                token === "-" ||
                token === "*" ||
                token === "/"
            ) {
                const right = stack.pop();
                const left = stack.pop();

                let result;

                switch (token) {
                    case "+":
                        result = left + right;
                        break;
                    case "-":
                        result = left - right;
                        break;
                    case "*":
                        result = left * right;
                        break;
                    case "/":
                        result = Math.trunc(left / right);
                        break;
                }

                stack.push(result);
            } else {
                stack.push(Number(token));
            }
        }

        return stack.pop();
    }
}

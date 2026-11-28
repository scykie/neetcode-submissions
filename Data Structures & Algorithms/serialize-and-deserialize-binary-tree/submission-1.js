
class Codec {
    serialize(root) {
        if (!root) return "#,";

        return root.val + "," +
            this.serialize(root.left) +
            this.serialize(root.right);
    }

    deserialize(data) {
        const stack = data.split(",");
        let idx = 0;

        function dfs() {
            const v = stack[idx++];

            if (v === "#") return null;

            const node = new TreeNode(Number(v));

            node.left = dfs();
            node.right = dfs();

            return node;
        }

        return dfs();
    }
}

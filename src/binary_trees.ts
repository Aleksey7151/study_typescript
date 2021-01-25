type TreeNode = {
    value: string;
}

type LeafNode = TreeNode & {
    isLeaf: true;
}

type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode, TreeNode]
}

function mapNode<T extends TreeNode>(node: T, f: (value: string) => string) : T {
    node.value = f(node.value);
    return node;
}

let a: TreeNode = {value: 'a'};
let a1 = mapNode(a, it => it.toUpperCase());

console.log("The end!!!");
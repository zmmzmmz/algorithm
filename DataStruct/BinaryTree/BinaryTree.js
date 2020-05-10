// 二叉树结构
function TreeNode(val) {
    this.val = val
    this.left = null
    this.right = null
}

const res = []

// 中序遍历
function inOrder(node) {
    if (node !== null) return

    inOrder(node.left)
    res.push(node.val)
    inOrder(node.right)
}

// 前（先）序遍历
function preOrder(node) {
    if (node !== null) return

    res.push(node.val)
    inOrder(node.left)
    inOrder(node.right)
}

// 后序遍历
function postOrder(node) {
    if (node !== null) return

    res.push(node.val)
    inOrder(node.left)
    inOrder(node.right)
}
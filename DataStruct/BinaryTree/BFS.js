// 广度优先遍历

// 递归版
/**
 * function TreeNode(val) {
 *  this.val = val
 *  this.left = left
 *  this.right = right
 * }
 * @param node {TreeNode}
 */
function BFS(node) {
  const res = []
  const queue = [node]
  let count = 0
  function bfs(count) {
    if (queue[count]) {
      const {val, left, right} = queue[count]
      res.push(val)
      left && queue.push(left)
      right && queue.push(right)
    }
    bfs(++count)
  }
  bfs(count)
  return res
}

// 非递归
function BFS2(node) {
  const res = []
  const queue = [node]

  let pointer = 0 // 定义指针
  while (pointer < queue.length) {
    const target = queue[pointer++]
    if (target) {
      const {val, left, right} = target
      res.push(val)
      left && queue.push(left)
      right && queue.push(right)
    }
  }
  return res
}
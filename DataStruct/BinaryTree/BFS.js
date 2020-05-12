// 广度优先遍历
// 思路：
// 1、初始化一个队列，根节点入队列
// 2、当队列为非空时，循环执行步骤3到4，否则执行结束
// 3、出队列取得一个结点，访问该结点
// 4、若该结点的左子树为非空，则将该结点的左子树入队列，若该结点的右子树为非空，则将该结点的右子树入队列

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
// 引入指针
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
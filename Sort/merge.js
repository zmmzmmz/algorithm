// 归并排序
// 思路：
// 采用分治法，将有序的子序列合并

// 递归版
function mergeSort(arr) {
  if (arr.length < 2) return arr
  const {length} = arr
  const middleIndex = Math.floor(length/2)
  let left = arr.slice(0, middleIndex)
  let right = arr.slice(middleIndex)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const res = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      res.push(left.shift())
    } else {
      res.push(right.shift())
    }
  }

  while (left.length) {
    res.push(left.shift())
  }
  while (right.length) {
    res.push(right.shift())
  }
  return res
}
// 快速排序

// 解法一，思路：
// 1. 选择基准（任意元素 radom，left, right, middle 都可以）
// 2. 小于基准的元素，移到基准的左边，大于基准的元素，移到基准的右边
// 3. 利用递归，对基准左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止
function quickSortA(arr) {
  if (arr.length <= 1) return arr
  let pivotIndex = 0
  let pivot = arr.splice(pivotIndex, 1)
  let left = []
  let right = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSortA(left).concat([pivot], quickSortA(right))
}

// 解法二，思路：
// @see https://humanwhocodes.com/blog/2012/11/27/computer-science-in-javascript-quicksort/
// 
function quickSortB(arr, left, right) {
  const { length } = arr
  left = left || 0
  right = right || arr.length - 1

  let pivotIndex = partition(arr, left, right)
  if (left < pivotIndex - 1) { // 检查索引是否从头开始
    quickSortB(arr, left, pivotIndex - 1)
  }
  if (pivotIndex < right) {
    quickSortB(arr, pivotIndex, right)
  }
  return arr
}

// 
function partition(arr, left, right) {
  let pivot = arr[left] // 基准值
  let i = left
  let j = right

  while (i <= j) {
    while (arr[i] < pivot) {
      i++
    }
    while (arr[j] > pivot) {
      j--
    }

    if (i < j) {
      swap(arr, i, j)
      i++
      j--
    }
  }
  return i
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

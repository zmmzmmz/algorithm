// 冒泡排序
// 最简单的算法，重复走访要排序的数组，直到没有元素需要交换，较小元素会由层层交换到达数组头部，故称“冒泡”
// 时间复杂度 O(n^2)
function bubble(arr) {
  const { length } = arr
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

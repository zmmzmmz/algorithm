// 插入排序
function insertingSort(arr) {
  const {length} = arr
  for (let i = 1; i< length; i++) {
    let preIndex = i - 1
    let current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex]
      index--
    }
  }
  return arr
}
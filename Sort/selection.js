// 选择排序
// 向后依次比对最小值，交换最小值的索引
function selectionSort (arr) {
  const {length} = arr

  for (let i = 0;i<length - 1;i++) {
    let minIndex = i
    for (let j = i+1;j<length;j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }

  return arr
}
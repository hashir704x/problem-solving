function swap(arr: number[], index1: number, index2: number) {
  let x = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = x;
}

function bubbleSort() {
  const arr = [1, 2, 1, 11, 9, 0, 2];
  let i = 0;
  while (i < arr.length) {
    let j = 0,
      isSwapped = false;
    while (j < arr.length - 1 - i) {
      if (arr[j] > arr[j + 1]) {
        isSwapped = true;
        swap(arr, j, j + 1);
      }
      j++;
    }
    if (!isSwapped) {
      break;
    }
    i++;
  }
  console.log(arr);
}

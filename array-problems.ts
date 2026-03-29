function problem1() {
  // find max and min elements
  const arr = [5, 65, 23, 7, 2, 61, 13];
  let min = arr[0],
    max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log("min:", min);
  console.log("min:", max);
}

function problem2() {
  // check if arrray is sorted in ascending order or not
  const arr = [4, 7, 112, 43, 55];
  let i = 0;
  while (i < arr.length - 1) {
    if (arr[i] > arr[i + 1]) {
      console.log("Not sorted in ascending");
      return;
    }
    i++;
  }
  console.log("Yes, sorted in ascending");
}
problem2();

function problem3() {
  // rotate array by k number
  let arr = [1, 2, 3, 4, 5];
  const k = 3;
  const addedArray = arr.slice(arr.length - k, arr.length);
  arr = addedArray.concat(arr);
  for (let i = 1; i <= k; i++) {
    arr.pop();
  }
  console.log(arr);
}
problem3();

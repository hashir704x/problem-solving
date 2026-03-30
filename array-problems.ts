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

function problem3() {
  // rotate array by k number
  let arr = [1, 2, 3, 4, 5];
  const k = 6;
  const toRotate = k % arr.length;
  const addedArray = arr.slice(arr.length - toRotate, arr.length);
  arr = addedArray.concat(arr);
  for (let i = 1; i <= toRotate; i++) {
    arr.pop();
  }
  console.log(toRotate);
  console.log(arr);
}

function problem4() {
  // give unique pairs whose sum is equal to target
  const arr = [0, 1, 2, 3, 4, 5, 6, 7];
  const target = 6;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log("(", arr[i], arr[j], ")");
      }
    }
  }
}

function problem5() {
  // find the missing element in array from 1 to N
  const arr = [5, 2, 1, 3, 7];
  let highestElement = arr[0];
  let i = 0;
  while (i < arr.length) {
    if (highestElement < arr[i]) highestElement = arr[i];
    i++;
  }
  i = 1;
  while (i <= highestElement) {
    if (!arr.includes(i)) {
      console.log(i);
    }
    i++;
  }
}

function problem6() {
  // shift zeroes to end
  let countOfZeroes = 0;
  const arr = [1, 0, 3, 12, 0, 0, 7];
  let i = 0;
  while (i < arr.length) {
    while (arr[i] === 0) {
      countOfZeroes++;
      arr.splice(i, 1);
    }
    i++;
  }

  for (let x = 0; x < countOfZeroes; x++) {
    arr.push(0);
  }
  console.log(arr);
}

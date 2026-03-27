function problem1x() {
  const arr = [2, 4, 6, 5, 8];
  const zeroArr = [];
  let z = 0;
  while (z < arr.length - 1) {
    zeroArr.push(0);
    z++;
  }
  zeroArr.unshift(1);
  const d = Number(zeroArr.join(""));

  let i = arr.length - 1;
  let total = 0,
    j = d;
  while (i >= 0) {
    total = total + arr[i] * j;
    j = j / 10;
    i--;
  }
  console.log(total);
}

function problem1() {
  const array = [2, 4, 6, 5, 8];
  let i = array.length - 1,
    total = 0;
  while (i >= 0) {
    total = total * 10;
    total = total + array[i];
    i--;
  }
  console.log(total);
}

function problem2() {
  // reverse a string
  const str = "Netsol";
  let tempStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    tempStr = tempStr + str[i];
  }

  console.log(tempStr);
}

function problem2WithTwoPointer() {
  // reverse a string
  const str = "racecar";
  let i = 0,
    j = str.length - 1,
    isPalindrome = true;
  while (i < j) {
    if (str[i] !== str[j]) {
      isPalindrome = false;
      break;
    }
    i++;
    j--;
  }
  if (isPalindrome) console.log("Yes, palindrome");
  else console.log("No, palindrome");
}

problem2WithTwoPointer();

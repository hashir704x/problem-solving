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

function problem3() {
  // count frequencies of each letter in a string
  const str = "banana";
  const map = new Map<string, number>();
  for (let i of str) {
    const count = map.get(i) ?? 0;
    map.set(i, count + 1);
  }

  let maxFreq = 0,
    target = "";

  for (let i of map.entries()) {
    if (maxFreq < i[1]) {
      maxFreq = i[1];
      target = i[0];
    }
  }
  console.log(target, maxFreq);
}

function problem4() {
  // check if 2 strings are anagrams
  const str1 = "car",
    str2 = "arc";

  if (str1.length !== str2.length) {
    console.log("Not anagrams");
    return;
  }

  const map1 = new Map<string, number>();
  const map2 = new Map<string, number>();

  for (let i of str1) {
    const count = map1.get(i) ?? 0;
    map1.set(i, count + 1);
  }
  for (let i of str2) {
    const count = map2.get(i) ?? 0;
    map2.set(i, count + 1);
  }

  for (let i of map1.entries()) {
    if (i[1] !== map2.get(i[0])) {
      console.log("No, anagrams");
      return;
    }
  }
  console.log("Yes, anagrams");
}

function problem5() {
  // check if one string is substring of another
  const str1 = "wowolf";
  const str2 = "wolf";
  let i = 0,
    j = 0,
    count = 0;
  while (i < str1.length) {
    if (str2[j] !== str1[i]) {
      count = 0;
      j = 0;
    } else if (str2[j] === str1[i]) {
      count++;
      j++;
      if (count === str2.length) {
        console.log("Yes, it is a substring");
        return;
      }
    }
    i++;
  }
  console.log("No, not a substring");
}

problem5();

// 問題1の答え:
let arr = [20, 4, 8, 12, 10];
let sum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
let average = sum / arr.length;
console.log("平均値:", average);




// 問題2の答え:
let arr = [7, 12, 5, 9, 8];
let count = 0;

if (arr[0] >= 3 && arr[0] % 2 === 0) { count++; }
if (arr[1] >= 3 && arr[1] % 2 === 0) { count++; }
if (arr[2] >= 3 && arr[2] % 2 === 0) { count++; }
if (arr[3] >= 3 && arr[3] % 2 === 0) { count++; }
if (arr[4] >= 3 && arr[4] % 2 === 0) { count++; }

console.log("3以上かつ偶数の数の個数:", count);




// 問題3の答え:
let arr = [15, 25, 30, 45, 50];
let product = arr[0];

for (let i = 1; i < arr.length; i++) {
  product *= arr[i];
}

console.log("積:", product);







// 問題4の答え:
let arr = [2, 8, 4, 6, 12];
let count = 0;

if (arr[0] % 2 === 0) { count++; }
if (arr[1] % 2 === 0) { count++; }
if (arr[2] % 2 === 0) { count++; }
if (arr[3] % 2 === 0) { count++; }
if (arr[4] % 2 === 0) { count++; }

console.log("2で割り切れる数の個数:", count);






// 問題5の答え:
let arr = [3, 6, 9, 12, 15];
let sum = 0;

if (arr[0] % 3 === 0) { sum += arr[0]; }
if (arr[1] % 3 === 0) { sum += arr[1]; }
if (arr[2] % 3 === 0) { sum += arr[2]; }
if (arr[3] % 3 === 0) { sum += arr[3]; }
if (arr[4] % 3 === 0) { sum += arr[4]; }

console.log("3の倍数の合計値:", sum);




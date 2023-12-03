// 問題1の答え:
const calculateTaxIncludedPrice = (basePrice, taxRate) => basePrice * (1 + taxRate / 100);

const basePrice = 1000;
const taxRate = 8;
const taxIncludedPrice = calculateTaxIncludedPrice(basePrice, taxRate);
console.log(`税込価格: ${taxIncludedPrice}円`);


// 問題2の答え:
const sumEvenNumbers = (numbers) => numbers.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);

const numberSequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenSum = sumEvenNumbers(numberSequence);
console.log(`偶数の合計: ${evenSum}`);


// 問題3の答え:
const isPalindrome = (str) => {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
};

const testString = "level";
console.log(`${testString}は回文か？ ${isPalindrome(testString)}`);

// 問題4の答え:
const celsiusToFahrenheit = (celsius) => celsius * 9 / 5 + 32;

const celsiusTemperature = 30;
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log(`${celsiusTemperature}摂氏度は${fahrenheitTemperature}華氏度です`);

// 問題5の答え:
const isPrime = (num) => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
};

const generatePrimesInRange = (start, end) => {
  const primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
};

const startRange = 1;
const endRange = 20;
const primeNumbers = generatePrimesInRange(startRange, endRange);
console.log(`${startRange}から${endRange}までの素数: ${primeNumbers}`);


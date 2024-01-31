//Do the below programs in  IIFE function
//1.(a)Print odd numbers in an array
//ans:
(function() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const odds = numbers.filter(num => num % 2 === 1);
    console.log(odds);
  })();
  solution:[1,3,5,7,9]
  
  //1.(b)Convert all the strings to title caps in a string array.
  //ans:
  const toTitleCase = (str) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1));

const strings = ["hello", "world", "this", "is", "a", "test"];

const titleCaseStrings = strings.map(toTitleCase);

console.log(titleCaseStrings);
solution: ["Hello", "World", "This", "Is", "A", "Test"]

//1.(c)Sum of all numbers in an array.
//ans:
const sum = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const result = sum(numbers);
  console.log(result);
  solution:15

  //1.(d)Return all the prime numbers in an array.
  //ans:
  (function() {
    function isPrime(n) {
      for (var i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    }
  
    function getPrimes(array) {
      var primes = [];
      for (var i = 0; i < array.length; i++) {
        if (isPrime(array[i])) {
          primes.push(array[i]);
        }
      }
      return primes;
    }
  
    
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var primes = getPrimes(array);
    console.log(primes); 
  })();
  solution:[2,3,5,7,11]

  //1.(e)Return all the palindromes in an array.
  // ans:
  function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  str = str.toLowerCase().replace(/\s/g, "");

  const reversedStr = str.split("").reverse().join("");

  return str === reversedStr;
}

function getAllPalindromes(array) {
  const palindromes = [];

  for (const str of array) {
    if (isPalindrome(str)) {
      palindromes.push(str);
    }
  }

  return palindromes;
}

const array = ["racecar", "madam", "civic", "hello", "world"];
const palindromes = getAllPalindromes(array);
console.log(palindromes); 
solution: ["racecar", "madam", "civic"]

//1.(f)Return median of two sorted arrays of the same size.
// ans:
function medianOfTwoSortedArrays(nums1, nums2) {
    
    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  
    
    const length = mergedArray.length;
    const median = length % 2 === 0 ? (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2 : mergedArray[Math.floor(length / 2)];
  
    return median;
  }
  solution:3

  //1.(g)Remove duplicates from an array.
  //ans:
  (function() {
    var arr = [1, 2, 3, 4, 1, 2, 3];
    var uniqueArr = [];
  
    for (var i = 0; i < arr.length; i++) {
      if (uniqueArr.indexOf(arr[i]) === -1) {
        uniqueArr.push(arr[i]);
      }
    }
  
    console.log(uniqueArr); 
  })();
  solution:[1,2,3,4]

  //1.(h)Rotate an array by k times.
//ans:
function rotateArray(array, k) {
    if (!array || k === 0) {
      return array;
    }
  
    const length = array.length;
  
    k = k % length;
  
    reverse(array, 0, length - 1);
  
    reverse(array, 0, k - 1);
  
    reverse(array, k, length - 1);
  
    return array;
  }
  
  function reverse(array, start, end) {
    for (let i = start; i < end; i++) {
      [array[i], array[end]] = [array[end], array[i]];
    }
  }
  
  const array = [1, 2, 3, 4, 5];
  const rotatedArray = rotateArray(array, 2);
  
  console.log(rotatedArray); 
  solution:[3,4,5,1,2]


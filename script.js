// question no 1: Do the below programs in anonymous function.
//1.(a)Print odd numbers in an array
// ans:
var even=[];
var odd = [];
function foo(arr){
for(var i=0;i<arr.length;i++){
if(arr[i]%2 == 0){
even.push(arr[i]);
}
else{
odd.push(arr[i]);
}
}
return odd;
}
console.log(foo([12,13,14,15]));
 solution : [13,15]

//1.(b)Convert all the strings to title caps in a string array
// ans:
var strings = ["hello", "world", "this", "is", "javascript"];

var toTitleCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

var titleCaseStrings = strings.map(toTitleCase);

console.log(titleCaseStrings);
 solution :["Hello","World","This","Is","Javascript"]

//1.(c) Sum of all numbers in an array.
// ans :
var arr = [1, 2, 3, 4, 5];
var sum = arr.reduce((a, b) => a + b, 0);

console.log(sum); 
 solution :15

//1.(d)Return all the prime numbers in an array.
// ans :
function isPrime(n) {
    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function getPrimes(arr) {
    return arr.filter(isPrime);
  }
  
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var primes = getPrimes(arr);
  
  console.log(primes);
   solution : [2,3,5,7]
  //1.(e)Return all the palindromes in an array.
  // ans:
  function isPalindrome(str) {
  
    return str === str.split('').reverse().join('');
  }
  
  function getAllPalindromes(arr) {
    
    return arr.filter(isPalindrome);
  }
  
  const words = ["hello", "noon", "racecar", "madam"];
  const palindromes = getAllPalindromes(words);
  console.log(palindromes);

  solution: ["noon", "racecar", "madam"]

  //1.(f)Return median of two sorted arrays of the same size.
  // ans:
  function medianOfTwoSortedArrays(arr1, arr2) {
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
  
    const middleIndex = mergedArray.length / 2;
  
    if (mergedArray.length % 2 === 0) {
      return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
    }
  
    return mergedArray[middleIndex];
  }
  
  const arr1 = [1, 3, 5];
  const arr2 = [2, 4, 6];
  const median = medianOfTwoSortedArrays(arr1, arr2);
  console.log(median); 
  
  solution : 3.5
  //1.(g)Remove duplicates from an array.
  //ans:
  const arr = [1, 2, 3, 1, 2, 4];

const uniqueArr = arr.filter((element, index) => {
  return arr.indexOf(element) === index;
});

console.log(uniqueArr);

solution: [1,2,3,4]
//1.(h)Rotate an array by k times.
//ans
function rotateArray(array, k) {
  const rotatedArray = [];

  for (let i = 0; i < array.length; i++) {
    rotatedArray.push(array[(i + k) % array.length]);
  }

  return rotatedArray;
}

const array = [1, 2, 3, 4, 5];
const rotatedArray = rotateArray(array, 2);

console.log(rotatedArray);

solution:[3,4,5,1,2]


  







// 2 do the below programs in arrow function
// 2.(a)Print odd numbers in an array.
//ans:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = arr.filter((number) => number % 2 !== 0);
console.log(oddNumbers);
solution :[1,3,5,7,9]

//2.(b)Convert all the strings to title caps in a string array.
//ans:
const toTitleCase = (array) => array.map((string) => string.charAt(0).toUpperCase() + string.slice(1));

const strings = ["hello", "world", "how", "are", "you"];

const titleCaseStrings = toTitleCase(strings);

console.log(titleCaseStrings);
solution : ["Hello", "World", "How", "Are", "You"]

//2.(c)Sum of all numbers in an array.
//ans:
const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((a, b) => a + b, 0);

console.log(sum); 
solution:15

//2(d)Return all the prime numbers in an array.
//ans:
const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };
  
  const getPrimes = (arr) => arr.filter(isPrime);
  
  console.log(getPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 
  solution:[2,3,5,7]

  //2(e)Return all the palindromes in an array.
  //ans:
  const isPalindrome = (word) => {
    const reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
  };
  
  const getPalindromes = (words) => {
    const palindromes = words.filter(isPalindrome);
    return palindromes;
  };
  
  const words = ["racecar", "madam", "civic", "hello"];
  const palindromes = getPalindromes(words);
  console.log(palindromes);
  solution:["racecar","madam","civic"]






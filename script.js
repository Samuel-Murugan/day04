// question no 1: Do the below programs in anonymous function.
//1.(a)Print odd numbers in an array
// ans:
//var even=[];
//var odd = [];
//function foo(arr){
//for(var i=0;i<arr.length;i++){
//if(arr[i]%2 == 0){
//even.push(arr[i]);
//}
//else{
//odd.push(arr[i]);
//}
//}
//return odd;
//}
//console.log(foo([12,13,14,15]));
// solution : [13,15]

//1.(b)Convert all the strings to title caps in a string array
// ans:
//var strings = ["hello", "world", "this", "is", "javascript"];

//var toTitleCase = (str) => {
//  return str.charAt(0).toUpperCase() + str.slice(1);
//};

//var titleCaseStrings = strings.map(toTitleCase);

//console.log(titleCaseStrings);
// solution :["Hello","World","This","Is","Javascript"]

//1.(c) Sum of all numbers in an array.
// ans :
//var arr = [1, 2, 3, 4, 5];
//var sum = arr.reduce((a, b) => a + b, 0);

//console.log(sum); 
// solution :15

//1.(d)Return all the prime numbers in an array.
// ans :
//function isPrime(n) {
  //  for (var i = 2; i < n; i++) {
    //  if (n % i === 0) {
      //  return false;
      //}
    //}
    //return true;
  //}
  
  //function getPrimes(arr) {
    //return arr.filter(isPrime);
  //}
  
  //var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //var primes = getPrimes(arr);
  
  //console.log(primes);
  // solution : [2,3,5,7]
  




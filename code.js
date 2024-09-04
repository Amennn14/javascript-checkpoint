//reverse function
function reverseString(str) {
    let reversed = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    
    return reversed;
  }
  console.log(reverseString("Test"));


  //count function
  function countCharacters(str) {
    return str.length;
  }
  console.log(countCharacters("test"));


  // max function
function findMax(arr) {
    return Math.max(...arr);
  }
  
  // min  function
  function findMin(arr) {
    return Math.min(...arr);
  }
  
  // sum function
  function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  // filter
  function filterArray(arr, condition) {
    return arr.filter(condition);
  }
  
  console.log(findMax([3, 8, 2, 9, 0]));            
  console.log(findMin([3, 8, 2, 9, 0]));                
  console.log(sumArray([3, 8, 2, 9, 0]));               
  console.log(filterArray([3, 8, 2, 9, 0], x => x > 3));

  //factoriel
function factorial(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // Prime
  function isPrime(num) {
    if (num <= 1) return false; 
    if (num <= 3) return true; 
    if (num % 2 === 0 || num % 3 === 0) return false; 
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  
  // Fibonacci
  function fibonacci(n) {
    const sequence = [];
    let a = 0, b = 1;
    while (n > 0) {
      sequence.push(a);
      [a, b] = [b, a + b];
      n--;
    }
    return sequence;
  }
  
  console.log(factorial(6));   
  console.log(isPrime(30));           
  console.log(isPrime(10));          
  console.log(fibonacci(11));         
  
  


  
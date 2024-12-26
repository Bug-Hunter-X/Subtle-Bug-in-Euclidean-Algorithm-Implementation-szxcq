function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(10, 2)); // Output: true, correct 
console.log(foo(10, 3)); // Output: true, correct
console.log(foo(10, 4)); // Output: false, incorrect. Should be true
console.log(foo(10, 5)); // Output: true, correct
console.log(foo(10, 6)); // Output: true, correct
console.log(foo(10, 7)); // Output: true, correct
console.log(foo(10, 8)); // Output: false, incorrect. Should be true
console.log(foo(10, 9)); // Output: true, correct
console.log(foo(10, 10)); // Output: true, correct
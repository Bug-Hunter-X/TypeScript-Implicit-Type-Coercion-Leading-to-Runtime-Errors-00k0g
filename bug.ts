function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, "2"); // Type error, but only at runtime
console.log(result); // Prints "12"
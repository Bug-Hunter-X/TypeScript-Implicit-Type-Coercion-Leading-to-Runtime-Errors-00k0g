function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error("Both parameters must be numbers");
  }
}

let result1 = addSafe(1, 2); // Correct result
console.log(result1); // Prints 3

try {
  let result2 = addSafe(1, "2"); // Throws an error
  console.log(result2);
} catch (error) {
  console.error(error.message); //Prints "Both parameters must be numbers"
}

# TypeScript Implicit Type Coercion Bug

This repository demonstrates a common issue in TypeScript where implicit type coercion can lead to runtime errors that are not caught by the compiler.  The `add` function is expected to add two numbers but accepts a string, resulting in unexpected string concatenation instead of numeric addition.  The solution shows how type guards can improve type safety and prevent this kind of runtime error.

## How to Reproduce

1. Clone the repository.
2. Compile the code using `tsc bug.ts`.
3. Run the compiled JavaScript code using Node.js. You'll see the unexpected result of "12" instead of 3.

## Solution

The `bugSolution.ts` file demonstrates how type guards can prevent this error.  The type guard checks if both parameters are numbers before performing the addition.  This explicit check ensures type safety and prevents runtime errors.
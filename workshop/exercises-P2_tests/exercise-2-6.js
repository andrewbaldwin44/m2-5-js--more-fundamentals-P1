// Problem 6
// ---------
// Step 1
// Write a function that
// - accepts an array.
// - The array has 3 elements.
// - The first element of the array is a string that represents an operation.
// - If the operation is
//      - "add", return the sum of the two other elements of the array.
//      - "sub" return their difference.
//      - "mult" return their product.
//  - Anything else return undefined.

// For example:
// f(["add", 10, 20]); // 30
// f(["mult", 2, 3]); // 6
// f(["spoof", 10, 10]); // undefined

function calculator(arr) {
  switch (arr[0]) {
    case 'add':
      return arr[1] + arr[2];
      break;
    case 'sub':
      return arr[2] - arr[1];
      break;
    case 'mult':
      return arr[1] * arr[2];
      break;
    default:
      return undefined;
      break;
  }
}

// Step 2
// We need 8 total test cases. The first two is provided.
expect(calculator(['mult', 2, 4]), 8);
expect(calculator(['add', 2, 4]), 6);
expect(calculator(['sub', 60, 5]), -55);
expect(calculator(['mult', -5, -5]), 25);
expect(calculator(['add', -6, 20]), 14);
expect(calculator(['sub', -2000, 5]), 2005);
expect(calculator(['mult', 50, -500]), -25000);
expect(calculator(['sub', 2, 1]), -1);

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}

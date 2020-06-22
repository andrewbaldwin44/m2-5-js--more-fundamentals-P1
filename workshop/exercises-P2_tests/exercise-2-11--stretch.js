// Problem 11
// ----------
// Make this function return the sum of the squares of all the numbers passed
// in.
// - If any element in the array is not a number, skip it.
// - If no arguments are passed, return `undefined`

function addNumbers(...nums) {
  if (nums.length == 0) return undefined;
  return nums.reduce((sum, num) => sum += num * num);
}

// Add 7 more test cases.
expect(addNumbers(1, 2, 3), 14); // 1 + 2**2 + 3**2 = 1 + 4 + 9 = 14
expect(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), 385);
expect(addNumbers(), undefined);
expect(addNumbers(-1, -2, -3, -4, -5, -6, -7, -8, -9, -10), 383);
expect(addNumbers(2, 4, 6, 8), 118);
expect(addNumbers(14, 385, 383, 118), 308852);
expect(addNumbers(0), 0);
expect(addNumbers(0, 0), 0);

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

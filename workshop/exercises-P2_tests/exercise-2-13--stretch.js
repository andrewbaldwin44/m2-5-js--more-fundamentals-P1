// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function reverse(str) {
  return (str === '')
    ? ''
    : reverse(str.substr(1)) + str.charAt(0);
}

function checkIsPalindrome(inputString) {
  return inputString == reverse(inputString);
}

// Add 6 test cases
expect(checkIsPalindrome('inputString'), false);
expect(checkIsPalindrome('racecar'), true);
expect(checkIsPalindrome('radar'), true);
expect(checkIsPalindrome('JAVASCRIPT'), false);
expect(checkIsPalindrome('5005'), true);
expect(checkIsPalindrome('never odd or even'), false);

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

// Problem 4
// ---------
// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex("hello", 1); // e
// getLetterAtIndex("", 4);      // undefined
// getLetterAtIndex("abc", 0);   // a

function getLetterAtIndex(str, index) {
  return str[index];
}

// Add 6 more test cases
expect(getLetterAtIndex('hello', 4), 'o');
expect(getLetterAtIndex('goodbye', 0), 'g');
expect(getLetterAtIndex('how', 2), 'w');
expect(getLetterAtIndex('s', 0), 's');
expect(getLetterAtIndex('', 4), undefined);
expect(getLetterAtIndex('lampostsarecool', 5), 's');
expect(getLetterAtIndex('absolute', 50), undefined);
expect(getLetterAtIndex('blahblah', -5), undefined);

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

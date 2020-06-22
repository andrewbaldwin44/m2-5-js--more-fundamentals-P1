// Problem 9
// ---------
// Make this function return the longest word in the input string. If the input
// string is empty then return an empty string.
// If multiple words have the same length, return the last one that matches.

// Example
//   longestWord("hey hello morning") returns "morning"

// HINTS:
//  - You'll need to use the split string method
//  - `forEach` might be helpful

function longestWord(str) {
  let longest = '';
  str.split(' ').forEach(string => {
    if (string.length >= longest.length) longest = string;
  });
  return longest
}

// We need 5 test cases
expect(longestWord('here are some words'), 'words');
expect(longestWord('oneWord'), 'oneWord');
expect(longestWord('Pneumonoultramicroscopicsilicovolcanoconiosis Pseudopseudohypoparathyroidism Floccinaucinihilipilification'), 'Pneumonoultramicroscopicsilicovolcanoconiosis');
expect(longestWord('word1 word2 word3 word4 word5'), 'word5');
expect(longestWord(''), '');

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

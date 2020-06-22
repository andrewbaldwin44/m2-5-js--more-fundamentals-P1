// Problem 14
// ----------
// Make this function return the input string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after every 40
// characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

function wrapAfter40Chars(str) {
  return str.match(/.{1,40}/g).map(line => {
    return line.endsWith(' ') ? line : line.trim();
  }).join('\n');
}


// Test case 1: No space after newline
expect(
  wrapAfter40Chars(
    'This is a very long string! It seems to go on forever. Sadly, it does not.'
  ),
  'This is a very long string! It seems to \ngo on forever. Sadly, it does not.'
);

// Test case 2: Space after newline
expect(
  wrapAfter40Chars('My favourite thing about cats is all the things.'),
  'My favourite thing about cats is all the\nthings.'
);

// Add 4 more test cases
expect(
  wrapAfter40Chars('I like to eat vege burgers with bacon, bacon, and more bacon.'),
  'I like to eat vege burgers with bacon, b\nacon, and more bacon.'
);

expect(
  wrapAfter40Chars('I like to eat vege burgers with bacon, bacon, and more bacon.'),
  'I like to eat vege burgers with bacon, b\nacon, and more bacon.'
);

expect(
  wrapAfter40Chars('I like avocados, but not on a burger!'),
  'I like avocados, but not on a burger!'
);

expect(
  wrapAfter40Chars("This is the sentence that never ends. It just goes on and on my friends. Sometimes I start writing it, \
  thinking that it ends. But this is the sentence that never ends. It just goes on and on my friends."),
  'This is the sentence that never ends. It\njust goes on and on my friends. Sometim\nes I start writing it,   thinking that i\nt ends. But this is the sentence that ne\nver ends. It just goes on and on my frie\nnds.'
);

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

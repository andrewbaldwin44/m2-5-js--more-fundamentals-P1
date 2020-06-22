// Problem 10
// ----------
// Make this function return the input string, capitalized.
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

// HINT:
//  - Write a function that capitalizes a single word.
//  - Split the input sentence into an array of words
//  - Iterate over each word, calling your "capitalize word" function
//  - Join the results into a string

function makeIntoTitle(sentence) {
  return sentence.toLowerCase().split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.substr(1)
  }).join(' ');
}

// Add 6 total (5 more)
expect(
  makeIntoTitle('the longest road is a great song'),
  'The Longest Road Is A Great Song'
);

expect(
  makeIntoTitle('I AM NOT YELLING!'),
  'I Am Not Yelling!'
);

expect(
  makeIntoTitle('quiet'),
  'Quiet'
);

expect(
  makeIntoTitle('This is a WEIRD senctence'),
  'This Is A Weird Senctence'
);

expect(
  makeIntoTitle('I like vege burgers with bacon'),
  'I Like Vege Burgers With Bacon'
);

expect(
  makeIntoTitle('coolbeansbro'),
  'Coolbeansbro'
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

// Problem 7
// ---------
// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function repeat(arr) {
  if (arr.length == 2) {
    return arr[1] > 0 ? arr[0].repeat(arr[1]) : ''
  } else return undefined;
}

// We need 7 test cases.
// Don't forget to test all of the question parameters
expect(repeat(['hello', 2]), 'hellohello');
expect(repeat(['hello', 20]), 'hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello');
expect(repeat(['spoon', -3]), '');
expect(repeat(['pencil case', 12]), 'pencil casepencil casepencil casepencil casepencil casepencil casepencil casepencil casepencil casepencil casepencil casepencil case');
expect(repeat(['hello', 2, 'hello']), undefined);
expect(repeat(['phonebook', 14]), 'phonebookphonebookphonebookphonebookphonebookphonebookphonebookphonebookphonebookphonebookphonebookphonebookphonebookphonebook');
expect(repeat(['22', 2]), '2222');


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

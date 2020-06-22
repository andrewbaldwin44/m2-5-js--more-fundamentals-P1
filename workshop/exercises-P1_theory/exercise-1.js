// Given the following functions, answer the questions below.

const square = (x) => {
  return x * x;
};

const decrement = (x) => {
  return x - 1;
};

const duplicateString = (x) => {
  return x.concat(x);
};

const reverseString = (str) => {
  const splitString = str.split(''); // var splitString = "hello".split("");
  const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  return reverseArray.join(''); // var joinArray = ["o", "l", "l", "e", "h"].join("");
};

// Expand each of the following and get the result of the expression
// 1-1
console.log(square(decrement(square(decrement(3)))));
/*
First decrement is called and will return 2,
Then suqare is called, returning 4,
Decrement is called again, returning 3,
Finally square is called, returning 9
*/

// 1-2
console.log(decrement(decrement(square(square(3)))));
/*
First square is called, returning 9,
then sqaure is called again, returning 81,
Decremenet is called, returning 80,
Finally decrement is called again, returning 79
*/

// 1-3
console.log(duplicateString(reverseString('hello')));
/*
First reverseString is called, returning olleh,
Then duplicatedString is called, returning olleholleh
*/


// 1-4
console.log(reverseString(duplicateString(duplicateString('foo'))));
/*
First duplicateString is called, returning foofoo
Then duplicateString is called again, returning foofoofoofoo,
Finally reverseString is called, returning oofoofoofoof
*/

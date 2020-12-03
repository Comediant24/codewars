// https://www.codewars.com/kata/539ee3b6757843632d00026b

/* Find the capitals

Instructions
Write a function that takes a single string (word) as argument.
The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

function capitals(word) {
  const capitalsArray = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      capitalsArray.push(i);
    }
  }
  return capitalsArray;
}

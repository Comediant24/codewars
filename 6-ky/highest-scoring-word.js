// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

/* Highest Scoring Word

Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
  const arrX = x.split(' ').map((elX) => {
    return elX.split('').reduce((sum, char) => {
      return (sum += char.charCodeAt() - 96);
    }, 0);
  });
  return x.split(' ')[arrX.indexOf(Math.max(...arrX))];
}

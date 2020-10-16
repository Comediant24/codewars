// https://www.codewars.com/kata/54ff3102c1bad923760001f3

/* Vowel Count

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').filter((item) => {
    for (let i = 0; i < vowels.length; i++) {
      if (item === vowels[i]) return item;
    }
  }).length;
}

// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/solutions/javascript

/* Anagram Detection

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"
"Buckethead" is an anagram of "DeathCubeK"


*/

var isAnagram = function (test, original) {
  return (
    test.toUpperCase().split('').sort().join('') ===
    original.toUpperCase().split('').sort().join('')
  );
};

// https://www.codewars.com/kata/5208f99aee097e6552000148

/* Break camelCase

Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution("camelCasing")  ==  "camel Casing"
*/

/*
My 1st solution
function solution(string) {
  return string.replace(/[A-Z]/g, str => '_'+str).split('_').join(' ')
}
*/

// My solution after I learned about parenthesis groups
function solution(string) {
  return string.replace(/([A-Z])/g, ' $1');
}

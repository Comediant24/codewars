// https://www.codewars.com/kata/55192f4ecd82ff826900089e

/* String repeat

Write a function called repeat_str which repeats the given string src exactly count times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

*/

function repeatStr(n, s) {
  return s.repeat(n);
}

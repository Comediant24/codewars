// https://www.codewars.com/kata/55908aad6620c066bc00002a

/* Exes and Ohs

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

function XO(str) {
  let x = 0;
  let o = 0;
  const strLower = str.toLowerCase();
  for (let i = 0; i < strLower.length; i++) {
    if (strLower[i] === 'x') {
      x++;
    } else if (strLower[i] === 'o') {
      o++;
    }
  }
  if ((x === 0) & (o === 0)) return true;
  return x === o;
}

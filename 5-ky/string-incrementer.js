// https://www.codewars.com/kata/54a91a4883a7de5d7800009c

/* String incrementer

Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

*/

function incrementString(string) {
  let number = string
    .split('')
    .filter((char) => char.charCodeAt(0) < 58)
    .join('');
  let newNumber = '' + (+number + 1);
  let length = number.length;
  while (newNumber.length < length) {
    newNumber = '0' + newNumber;
  }
  return string.slice(0, -length || string.length) + newNumber;
}

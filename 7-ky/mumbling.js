// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

/* Mumbling

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  return s
    .split('')
    .map((item, index) => {
      const itemAccum = item.repeat(index + 1);
      return itemAccum[0].toUpperCase() + itemAccum.slice(1).toLowerCase();
    })
    .join('-');
}

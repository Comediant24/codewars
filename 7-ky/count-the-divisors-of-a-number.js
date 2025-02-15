// https://www.codewars.com/kata/542c0f198e077084c0000c2e

/* Count the divisors of a number

Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples
divisors(4)  = 3  // 1, 2, 4
divisors(5)  = 2  // 1, 5
divisors(12) = 6  // 1, 2, 3, 4, 6, 12
divisors(30) = 8  // 1, 2, 3, 5, 6, 10, 15, 30
*/

function getDivisorsCnt(n) {
  let count = 0;
  for (i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count;
}

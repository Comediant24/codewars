// https://www.codewars.com/kata/54da5a58ea159efa38000836

/* Find the odd int

Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    let sum = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[i] == A[j]) {
        sum = sum + 1;
      }
    }
    if (sum % 2 != 0) return A[i];
  }
  return 0;
}

// https://www.codewars.com/kata/5949481f86420f59480000e7

/* Odd or Even?

Given a list of numbers, determine whether the sum of its elements is odd or even.
Give your answer as a string matching "odd" or "even".
If the input array is empty consider it as: [0] (array with a zero).

Example:
odd_or_even([0])          ==  "even"
odd_or_even([0, 1, 4])    ==  "odd"
odd_or_even([0, -1, -5])  ==  "even"
*/

function oddOrEven(array) {
  return array.reduce((sum, item) => sum + item, 0) % 2 ? 'odd' : 'even';
}

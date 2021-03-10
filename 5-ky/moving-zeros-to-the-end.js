// https://www.codewars.com/kata/52597aa56021e91c93000cb0

/* Moving Zeros To The End

Write an algorithm that takes an array and moves all of the zeros to the end,
preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/

var moveZeros = function (arr) {
  let arr2 = [];
  let zeroCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
      continue;
    }
    arr2.push(arr[i]);
  }
  for (let i = 0; i < zeroCount; i++) {
    arr2.push(0);
  }
  return arr2;
};

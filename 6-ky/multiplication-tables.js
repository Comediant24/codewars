// https://www.codewars.com/kata/5432fd1c913a65b28f000342

/* Multiplication Tables

Create a function that accepts dimensions, of Rows x Columns,
as parameters in order to create a multiplication table sized
according to the given dimensions. **The return value of the
function must be an array, and the numbers must be Fixnums, NOT strings.

Example:

multiplication_table(3,3)

1 2 3
2 4 6
3 6 9

-->[[1,2,3],[2,4,6],[3,6,9]]

Each value on the table should be equal to the value of multiplying
the number in its first row times the number in its first column.
*/

function multiplicationTable(row, col) {
  let table = [];
  for (let i = 0; i < row; i++) {
    table.push([]);
    for (let j = 0; j < col; j++) {
      table[i].push((j + 1) * (i + 1));
    }
  }
  return table;
}

// https://www.codewars.com/kata/57fb44a12b53146fe1000136

/* Exclamation marks series #17: Put the exclamation marks and question marks to the balance, Are they balanced?

Description:
Each exclamation mark weight is 2; Each question mark weight is 3. Put two string left and right to the balance, Are they balanced?

If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; If they are balanced, return "Balance".

Examples
balance("!!","??") === "Right"
balance("!??","?!!") === "Left"
balance("!?!!","?!?") === "Left"
balance("!!???!????","??!!?!!!!!!!") === "Balance"
*/

function balance(left, right) {
  const arr = [left, right].map((el) => {
    return el
      .split('')
      .map((el) => {
        return el == '!' ? 2 : 3;
      })
      .reduce((sum, el) => sum + el);
  });
  if (arr[0] > arr[1]) return 'Left';
  if (arr[0] < arr[1]) return 'Right';
  return 'Balance';
}

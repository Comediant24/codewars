// https://www.codewars.com/kata/53368a47e38700bd8300030d

/* Format a string of names like 'Bart, Lisa & Maggie'.

Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names,
which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
*/

function list(names) {
  return names.reduce((str, name, index, names) => {
    if (index === 0) {
      return name.name;
    } else if (index === names.length - 1) {
      return (str += ` & ${name.name}`);
    } else {
      return (str += ', ' + name.name);
    }
  }, '');
}

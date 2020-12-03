// https://www.codewars.com/kata/51f2b4448cadf20ed0000386

/* Remove anchor from URL

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

// returns 'www.codewars.com?page=1' 
removeUrlAnchor('www.codewars.com?page=1') 
*/

/* 1st solution
function removeUrlAnchor(url) { 
  let index = url.indexOf('#');
  return index > 0 ? url.slice(0, index) : url;
}
*/

function removeUrlAnchor(url) {
  return url.split('#')[0];
}

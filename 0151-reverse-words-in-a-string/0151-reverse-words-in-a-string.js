/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let arr = s.split(/\s+/)
  let result = []

  for(let i=arr.length-1; i>=0; i--) {
    result.push(arr[i])
  }

  return result.join(' ').trim()
};
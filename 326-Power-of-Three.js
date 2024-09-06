/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
if (n===1) return true
if (n<1)return false
 return n%3===0 &&	isPowerOfThree(n/3)	
  
 
};
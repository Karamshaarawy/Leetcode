/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (n===1) return true
if (n<1)return false
 return n%4===0 &&	isPowerOfFour(n/4)	
 
};
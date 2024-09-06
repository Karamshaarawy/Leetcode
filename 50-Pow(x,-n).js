/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n<0){
        x=1/x
        n=-n
    }
    function calculate(num) {
        if (num === 0) return 1;
        let half = calculate(Math.floor(num / 2));
        if (num % 2 === 0) {
            return half * half;
        } else {
            return half * half * x;
        }
    }
    return calculate(n);
};


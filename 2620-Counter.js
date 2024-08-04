/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let startingNumber=parseInt(n-1)
    return function() {
        startingNumber+=1
        return startingNumber     
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
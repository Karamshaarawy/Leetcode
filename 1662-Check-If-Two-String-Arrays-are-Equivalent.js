/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    
    
    let x=word1.join("")
    let y=word2.join("")
    if(x===y){
        return true
    }else{
        return false
    }
};
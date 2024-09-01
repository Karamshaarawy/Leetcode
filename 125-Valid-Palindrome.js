/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.replace(/[!"#$%&'()*+,-./:;<=>?@[\\\]^_ `{|}~]/g, '').toLowerCase()
    let reverse=new Array(s.length)
    for (let char=reverse.length;char>0;char--){
        console.log(char-1)
        reverse[char-1]=s[(s.length-1)-(char-1)]
    }
    if(reverse.join("")===s){
        return true
    }else{
        return false
    }

};
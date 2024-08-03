/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    arrSorted=arr.sort((a,b)=>a-b)
    targetSorted=target.sort((a,b)=>a-b)
    const result=targetSorted.map((element,index)=>{
        if (arr[index]===element){
            return true
        }else{
            return false
        }
})
return !result.includes(false)
    }

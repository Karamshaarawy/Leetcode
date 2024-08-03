/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    arrSorted=arr.sort((a,b)=>a-b)
    targetSorted=target.sort((a,b)=>a-b)
    let result=true
    targetSorted.map((element,index)=>{
        if (arr[index]===element){
        }else{
            result= false
        }
})
return result
    }

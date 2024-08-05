/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
    let results = [];
    arr.map((el, index) => {
      const newArray =
        index > -1 ? arr.slice(0, index).concat(arr.slice(index + 1)) : arr;
      newArray.includes(el) ? null : results.push(el);
    });
if (results.length===0){
    return ""
}else if(k<=results.length+1){
return results[k-1]
    } else
    {return ""
    }
  };
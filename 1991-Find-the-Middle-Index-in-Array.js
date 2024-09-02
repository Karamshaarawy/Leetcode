/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let leftSum = 0;
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
    for (let i=0;i<nums.length;i++){
       totalSum-=nums[i]
        if(totalSum===leftSum){
            return i
        }
        leftSum+=nums[i]
    }
    return -1
};
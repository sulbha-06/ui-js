const nums = [2,7,11,15]; const target = 9;

var twoSum = function(nums, target) {
   
    let resut = [];
    for(let i=0;i< nums.length;i++){
        console.log(nums[i]);
        for(let j=1;j<nums.length;j++){
            console.log(nums[j]);
            if( nums[i]+nums[j]== target){
                resut.push(i,j);
                return resut;
            }
        }
    }return resut;
};
twoSum(nums,target);
console.log(twoSum(nums,target));
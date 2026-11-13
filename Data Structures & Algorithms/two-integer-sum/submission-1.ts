class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let output = [];
        for(let i=0; i<nums.length; i++){
                    let j =nums.length-1; 
            while(j>i){
                if(nums[i]+nums[j] === target)return [i,j];
                j--;
            }
        }
        return [];
    }
}

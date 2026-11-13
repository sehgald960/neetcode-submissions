class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen  = new Map<number, number>();
        for(let x = 0; x<nums.length; x++){
            const complement = target - nums[x];
            if(seen.has(complement)){
                return [seen.get(complement), x];
            }
            seen.set(nums[x], x)
                    }
        //let output = [];
        // for(let i=0; i<nums.length; i++){
        // let j =nums.length-1; 
        //     while(j>i){
        //         if(nums[i]+nums[j] === target)return [i,j];
        //         j--;
        //     }
        // }
        return [];
    }
}

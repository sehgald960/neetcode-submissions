class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let num = {}
        for(let x of nums){
            if(x in num){
                return true;
            }
            else{
                num[x] = x;
            }
        } 
        return false;
    }
}

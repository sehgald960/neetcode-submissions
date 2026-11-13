class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let num = new Set();
        for(let x of nums){
            if(num.has(x)) return true;
            num.add(x)
        }
        // for(let x of nums){
        //     if(x in num){
        //         return true;
        //     }
        //     else{
        //         num[x] = x;
        //     }
        // } 
        return false;
    }
}

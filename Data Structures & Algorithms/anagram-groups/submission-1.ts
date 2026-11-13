class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const group = new Map<string, string[]>();
        for(let i =0; i<strs.length; i++){
            const x = strs[i].split('').sort().join('');
            if(group.has(x)){
                group.get(x).push(strs[i]);
            }
            else
            group.set(x, [strs[i]]);
                    
            }
                        return Array.from(group.values()) ;
                }
}

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const group = new Map<string, string[]>()
         return strs.reduce((ac, item) =>{
            const x = item.split('').sort().join('');
            if(group.has(x)){
                group.get(x).push(item);
            }
            else
            group.set(x, [item])

            
            return Array.from(group.values()) ;
        },[]);
    }
}

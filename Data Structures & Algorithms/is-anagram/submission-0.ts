class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length)return false;
        let first = s.split('').sort().join('').toLowerCase();
        let second = t.split('').sort().join('').toLowerCase();
        
        return first === second;
    }
}

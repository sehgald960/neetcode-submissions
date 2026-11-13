class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const str = s.replace(/\W/g,'').toLowerCase();
        return str.split('').reverse().join('') === str;
    }
}

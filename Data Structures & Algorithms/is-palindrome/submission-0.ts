class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const str = s.replace(/\W/g,'').toLowerCase();
        console.log('string', str, str.split('').reverse().join('') )
        return str.split('').reverse().join('') === str;
    }
}

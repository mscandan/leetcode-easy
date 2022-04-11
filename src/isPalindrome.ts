export const isPalindrome = (s: string): boolean => {
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome('ab_a'));

export const lengthOfLastWord = (s: string) => {
  const filtered = s.trim().split(/(\s+)/);
  return filtered[filtered.length - 1].length;
};

const testCases = ['   fly me   to   the moon  ', 'Hello World'];

testCases.forEach(testCase => console.log(lengthOfLastWord(testCase)));

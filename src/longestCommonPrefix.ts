export const longestCommonPrefix = (strs: Array<string>): string => {
  const sorted = strs.sort((a, b) => a.length - b.length);
  if (sorted.length === 1) return sorted[0];
  if (sorted[0].length === 1) return sorted.every(word => word.startsWith(sorted[0][0])) ? sorted[0][0] : '';
  let longestCommon = '';
  for (let i = 0; i < sorted[0].length; i++) {
    const word = sorted[0].slice(0, i + 1);
    if (sorted.every(item => item.startsWith(word))) longestCommon = word;
  }
  return longestCommon;
};

const testCases = [
  ['flower', 'flow', 'flight'], // fl
  ['dog', 'racecar', 'car'], // ""
  ['ab', 'a'], // a
  ['cir', 'car'], // "c"
  ['reflower', 'flow', 'flight'], // ""
  ['ca', 'a'], // ""
];

testCases.forEach(testCase => console.log(longestCommonPrefix(testCase)));

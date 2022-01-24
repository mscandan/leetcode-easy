export const plusOne = (digits: Array<number>): Array<number> => {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] > 9) {
      digits[i] = 0;
    } else return digits;
  }
  digits.unshift(1);
  return digits;
};

const testCases = [
  [1, 2, 3],
  [4, 3, 2, 1],
  [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3],
  [8, 9, 9, 9],
  [9],
];

testCases.forEach(testCase => console.log(plusOne(testCase)));

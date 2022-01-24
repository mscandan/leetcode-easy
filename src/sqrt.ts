/* 
    Given a non-negative integer x, compute and return the square root of x.
    Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
    Note: You are not allowed to use any built-in exponent function or operator
*/

export const sqrt = (x: number): number => {
  if (x === 1 || x === 0) return x;
  let left = 1;
  let right = x;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (mid * mid === x) return mid;
    if (mid * mid > x) right = mid;
    else left = mid + 1;
  }
  return left - 1;
};

const testCases = [
  { x: 4, expected: 2 },
  { x: 2, expected: 1 },
  { x: 8, expected: 2 },
  { x: 225, expected: 15 },
];

testCases.forEach(testCase => {
  const res = sqrt(testCase.x);
  if (res !== testCase.expected) {
    console.log('Failed\n exp: ', testCase.expected, '\ngot: ', res);
  }
});

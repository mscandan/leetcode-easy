/*
  You are climbing a staircase. It takes n steps to reach the top.
  Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? 
*/

export const climbStairs = (n: number): number => {
  if (n === 0 || n === 1) return 1;
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
};

const testCases = [
  { n: 2, expected: 2 },
  { n: 3, expected: 3 },
];

testCases.forEach(testCase => {
  const res = climbStairs(testCase.n);
  if (res !== testCase.expected) {
    console.log('Failed\n exp: ', testCase.expected, '\n got: ', res);
  }
});

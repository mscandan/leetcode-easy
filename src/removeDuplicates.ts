export const removeDuplicates = (nums: Array<number>): number => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i < nums.length - 1 && nums[i] === nums[i + 1]) continue;
    nums[count] = nums[i];
    count++;
  }
  return count;
};

const testCases: Array<Array<number>> = [
  [1, 1, 2],
  // [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
];

testCases.forEach(testCase => console.log(removeDuplicates(testCase)));

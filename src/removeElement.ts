export const removeElement = (nums: Array<number>, val: number): number => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
};

const testCases = [
  { nums: [3, 2, 2, 3], val: 3 },
  { nums: [0, 1, 2, 2, 3, 0, 4, 2], val: 2 },
];

testCases.forEach(testCase => console.log(removeElement(testCase.nums, testCase.val)));

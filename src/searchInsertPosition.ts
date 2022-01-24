export const searchInsert = (nums: number[], target: number): number => {
  let left = 0,
    right = nums.length;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) right = mid;
    else left = mid + 1;
  }
  return left;
};

const testCases = [
  { nums: [1, 3, 5, 6], target: 5 }, // 2
  {
    nums: [1, 3, 5, 6], // 1
    target: 2,
  },
  {
    nums: [1, 3, 5, 6], // 4
    target: 7,
  },
  {
    nums: [3, 6, 7, 8, 10], // 1
    target: 5,
  },
];

testCases.forEach(testCase => console.log(searchInsert(testCase.nums, testCase.target)));

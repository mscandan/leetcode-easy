export const singleNumber = (nums: number[]): number => {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.delete(nums[i]);
    } else {
      map.set(nums[i], 1);
    }
  }

  return map.keys().next().value;
};

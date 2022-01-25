// Don't return anyting modify nums1 instead.
export const mergeSortedArrays = (nums1: Array<number>, m: number, nums2: Array<number>, n: number): void => {
  while (n) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[m + n - 1] = nums1[--m];
    } else {
      nums1[m + n - 1] = nums2[--n];
    }
  }
};

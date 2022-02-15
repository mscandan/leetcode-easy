/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 1) return new TreeNode(nums[0]);
  if (nums.length === 0) return null;

  const centerIdx = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[centerIdx]);

  const leftSubtree = nums.slice(0, centerIdx);
  root.left = sortedArrayToBST(leftSubtree);

  const rightSubtree = nums.slice(centerIdx + 1, nums.length);
  root.right = sortedArrayToBST(rightSubtree);

  return root;
}

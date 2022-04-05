interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export const minDepth = (root: TreeNode | null): number => {
  if (!root) return 0;
  if (!root.left) return minDepth(root.right) + 1;
  if (!root.right) return minDepth(root.left) + 1;

  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

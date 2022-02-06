interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export const maxDepth = (root: TreeNode | null): number => {
  const helper = (node: TreeNode | null, currentDepth: number): number => {
    if (!node) return currentDepth;
    return Math.max(helper(node.right, currentDepth + 1), helper(node.left, currentDepth + 1));
  };

  return helper(root, 0);
};

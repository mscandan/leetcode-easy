interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

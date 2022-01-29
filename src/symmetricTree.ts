interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export const isSymmetric = (root: TreeNode | null): boolean => {
  if (!root) return true;

  const checkSymmetry = (left: TreeNode | null, right: TreeNode | null): boolean => {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    return checkSymmetry(left.left, right.right) && checkSymmetry(left.right, right.left);
  };
  return checkSymmetry(root.left, root.right);
};

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export const preorderTraversal = (root: TreeNode | null): number[] => {
  const result: number[] = [];

  if (!root) return result;

  var stack = [];
  stack.push(root);

  while (stack.length) {
    var node = stack.pop();
    if (node) {
      result.push(node.val);

      if (node.right !== null) {
        stack.push(node.right);
      }
      if (node.left !== null) {
        stack.push(node.left);
      }
    }
  }

  return result;
};

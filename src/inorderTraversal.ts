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
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

const check = (root: TreeNode | null, visited: Array<number>): Array<number> => {
  if (!root) return visited;
  visited = check(root.left, visited);
  visited.push(root.val);
  return check(root.right, visited);
};

const inorderTraversal = (root: TreeNode | null): Array<number> => {
  let visited: Array<number> = [];
  return check(root, visited);
};

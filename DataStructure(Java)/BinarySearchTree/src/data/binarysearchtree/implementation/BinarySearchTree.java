package data.binarysearchtree.implementation;

public class BinarySearchTree {

	private TreeNode root;

	public TreeNode insertKey(TreeNode root, char x) {

		TreeNode p = root;
		TreeNode newNode = new TreeNode();
		newNode.data = x;
		newNode.left = null;
		newNode.right = null;

		if (p == null)
			return newNode;

		else if (newNode.data < p.data) {
			p.left = insertKey(p.left, x);
			return p;
		}

		else if (newNode.data > p.data) {
			p.right = insertKey(p.right, x);
			return p;
		}

		else
			return p;
	}

	public void insertBST(char x) {
		root = insertKey(root, x);
	}

	public String searchBST(char x) {
		TreeNode p = root;
		while (p != null) {
			if (x < p.data)
				p = p.left;
			else if (x > p.data)
				p = p.right;
			else
				return "Search : "+p.data;
		}
		return "Search Fail";
	}

	public void inorder(TreeNode root) {
		if (root != null) {
			inorder(root.left);
			System.out.printf(" %c", root.data);
			inorder(root.right);
		}
	}

	public void printBST() {
		inorder(root);
		System.out.println();
	}
}

package data.binarytree.implementation;

public class Main {

	public static void main(String[] args) {
		
		LinkedTree T = new LinkedTree();
		
		LinkedTree.TreeNode n7 = T.makeBT(null, 'D', null);
		LinkedTree.TreeNode n6 = T.makeBT(null, 'C', null);
		LinkedTree.TreeNode n5 = T.makeBT(null, 'B', null);
		LinkedTree.TreeNode n4 = T.makeBT(null, 'A', null);
		LinkedTree.TreeNode n3 = T.makeBT(n6, '/', n7);
		LinkedTree.TreeNode n2 = T.makeBT(n4, '*', n5);
		LinkedTree.TreeNode n1 = T.makeBT(n2, '-', n3);
		
		System.out.print(" Preorder : ");
		T.preorder(n1);
		
		System.out.print("\n Ineorder : ");
		T.inorder(n1);
		
		System.out.print("\n Postorder : ");
		T.postorder(n1);
	}

}

package data.binarysearchtree.implementation;

public class Main {
	public static void main(String[] args) {

		BinarySearchTree bsT = new BinarySearchTree();

		bsT.insertBST('G');
		bsT.insertBST('I');
		bsT.insertBST('H');
		bsT.insertBST('D');
		bsT.insertBST('B');
		bsT.insertBST('M');
		bsT.insertBST('N');
		bsT.insertBST('A');
		bsT.insertBST('J');
		bsT.insertBST('E');
		bsT.insertBST('Q');

		System.out.print("Binary Tree >>> ");
		bsT.printBST();

		System.out.println("Is There \"A\" ? >>> " + bsT.searchBST('A'));
		System.out.println("Is There \"Z\" ? >>> " + bsT.searchBST('Z'));
		
		


	}
}

package sort.quicksort.implementation;

public class Main {

	public static void main(String[] args) {
		int a[] = {69,10,3,22,9,11,70,32,56};
		Sort sort = new Sort();
		System.out.printf("정렬할 원소 : ");
		for(int i : a)
			System.out.printf(i+" ");
		System.out.println();
		sort.quickSort(a, 0, a.length-1);
	}
}

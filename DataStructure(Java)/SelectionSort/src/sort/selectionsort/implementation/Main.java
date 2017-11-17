package sort.selectionsort.implementation;

public class Main {

	public static void main(String[] args) {
		int a[] = {69, 11, 31, 22, 30, 2, 16, 8};
		Sort sort = new Sort();
		System.out.printf("정렬할 원소 : ");
		for(int i : a)
			System.out.printf(i+" ");
		System.out.println();
		sort.selectionSort(a);
	}

}

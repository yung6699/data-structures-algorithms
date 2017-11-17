package sort.mersort.implementation;

public class Main {
	
	public static void main(String[] args) {
		int num[] = {69, 10, 30, 2, 16, 8, 31, 22};
		Sort s = new Sort();
		System.out.printf("정렬할 원소 : ");
		for(int i : num){
			System.out.printf(i+" ");
		}
		
		System.out.println();
		
		// 정렬할 배열, 첫번째 인덱스, 마지막 인덱스
		s.mergeSort(num, 0, num.length-1);
	}

}

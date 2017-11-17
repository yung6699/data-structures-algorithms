package sort.selectionsort.implementation;

public class Sort {
	
	public void selectionSort(int a[]){
		//가장 작은 값을 가진 인덱스
		int min;
		int level = 0;
		
		for(int i = 0; i<a.length-1; i++){
			min = i;
			
			for(int j = i+1; j<a.length; j++){
				if(a[j] < a[min])
					min = j;
			}
			
			swap(a, min, i);
			System.out.printf("선택 정렬 "+ ++level + "단계 : ");
			for(int j : a)
				System.out.printf(j+" ");
			System.out.println();
		}
	}
	
	public void swap(int a[], int min, int i){
		int temp = a[min];
		a[min] = a[i];
		a[i] = temp;
	}
}

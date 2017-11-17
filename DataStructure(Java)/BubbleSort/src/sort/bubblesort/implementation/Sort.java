package sort.bubblesort.implementation;

public class Sort {
	
	public void bubbleSort(int a[]){
		int temp;
		
		for(int i = a.length-1; i>0; i--){
			System.out.println("버블 정렬 "+ (a.length-i) +" 단계 : ");
			
			for(int j = 0; j < i; j++){
				if(a[j] > a[j+1]){
					temp = a[j];
					a[j] = a[j+1];
					a[j+1] = temp;
				}
				
				for(int k : a)
					System.out.printf(k +" ");
				
				System.out.println();
				
			}
			System.out.println();
		}
	}
}

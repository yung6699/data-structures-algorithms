package sort.quicksort.implementation;

public class Sort {

	private int level = 0;
	private int temp;
	private int left; // 부분집합 시작 인덱스
	private int right; // 부분집합 끝 인덱스
	private int pivot;  // 부분 집합 피봇
	
	public int partition(int a[], int left, int right){
		
		this.left = left;
		this.right = right;
		pivot = (left + right)/2;
		
		System.out.println("pivot 인덱스 : " + pivot);
		System.out.println("[퀵 정렬 "+ ++level +"단계 : pivot = "+a[pivot]+"]");
		
		// left와 right가 만나기 전까지 실행한다.
		while(left < right){
										
			// 왼쪽에서 오른쪽으로 이동하면서 피봇보다 크거나 같은 값을 찾는다.
			while((a[left] <= a[pivot]) && (left < right))
				left++;						// Left와 Right가 가리키는 위치가 같은지 판별하기 위해 넣은 조건 L < R
			
			// 오른쪽에서 왼쪽으로 이동하면서 피봇보다 작은 값을 찾는다.
			while((a[right] > a[pivot]) &&  (left < right)) 
				right--;
			
			// left와 right가 안만난 경우에 처리됨
			if(left < right){
				
				temp = a[left];
				a[left] = a[right];
				a[right] = temp;
				
				// 단 left가 피봇 즉 피봇과 right가 위치를 바꾸는 것은 피봇을 확정하는 것
				// 즉 부분집합에 대한 퀵정렬이 끝남
				if(left == pivot){
					for(int i : a)
						System.out.printf(i+" ");
					System.out.println();
					
					return right;
				}	
			}
		}
		
		//L = R 
		//L과 R이 같은 곳을 가리키는 요소는 바뀌고 나서 위치가 확정된다.
		temp = a[pivot];
		a[pivot] = a[right];
		a[right] = temp;
		for(int i : a)
			System.out.printf(i+" ");
		System.out.println();
		return right;
	}
	
	
	public void quickSort(int a[], int begin, int end){
		// 재귀 호출시 end가 begin보다 작을시 실행 안함
		if(begin < end){
			int p;
			
			// 분할 작업 후 피봇이 확정된 위치의 인덱스를 반환 받는다.
			p = partition(a, begin, end);
			
			//재귀 호출
			//왼쪽 부분집합 정렬
			quickSort(a, begin, p-1);
			// 피봇 오른쪽 부분집합 정렬
			quickSort(a, p+1, end);
		}
	}
}

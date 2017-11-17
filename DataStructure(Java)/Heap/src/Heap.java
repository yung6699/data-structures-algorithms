
public class Heap {
	private int heapSize;
	private int itemHeap[];
	
	public Heap(){
		heapSize = 0;
		itemHeap = new int[10];
	}
	/*
	 부모노드 인덱스 i/2
	 왼쪽 자식 노드 인덱스 i*2
	 오른쪽 자식 노드 인덱스 i*2+1
	*/
	public void insertHeap(int item){
		int i = ++heapSize;
		while((i != 1) && (item > itemHeap[i/2])){
			itemHeap[i] = itemHeap[i/2];
			i/=2;
		}
		itemHeap[i] = item;
	}
	
	public int getHeapSize(){
		return this.heapSize;
	}
	
	public int deleteHeap(){
		int parent, child;
		int item, temp;
		item = itemHeap[1];
		temp = itemHeap[heapSize--];
		parent = 1;
		child = 2;
		
		while(child <= heapSize){
			if((child < heapSize) && (itemHeap[child]<itemHeap[child+1]))
				child++;
			if(temp >= itemHeap[child])
				break;
			
			itemHeap[parent] = itemHeap[child];
			parent = child;
			child *= 2;
		}
		
		itemHeap[parent] = temp;
		return item;
	}
	
	public void printHeap(){
		System.out.print("Heap >>> ");
		for(int i=1; i<=heapSize; i++)
			System.out.print(" "+itemHeap[i]);
	}
}

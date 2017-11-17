package data.arrayqueue.implementation;

public class ArrayQueue {
	
	// 선입 선출 구조이기 때문에 앞과 끝의 인덱스를 표시 해야함
	private int front = -1;
	private int tail = -1;
	private int queueSize;
	private Object arrayQueue[];
	
	public ArrayQueue(int queueSize) {
		this.queueSize = queueSize;
		arrayQueue = new Object[this.queueSize];
	}
	
	public boolean isEmpty(){
		return (front == tail);
	}
	
	public boolean isFull(){
		return (tail == this.queueSize-1);
	}
	
	public void push(Object input){
		if(isFull()){
			System.out.println("큐가 꽉 찼습니다.");
		} else {
			arrayQueue[++tail] = input;
			System.out.println("큐에 넣음 : " + input);
		}
	}
	
	public Object pop(){
		if(isEmpty()){
			front = -1;
			tail = -1;
			return "꺼낼 데이터가 없습니다.";
			
		} else {
			Object temp = arrayQueue[front+1];
			arrayQueue[front+1] = null;
			front++;
			return temp;
		}
	}
	
	public String toString(){
		StringBuffer str;
		if(isEmpty()){
			return "큐가 비어 있습니다.";
		} else {
			str = new StringBuffer();
			str.append("Array Queue>> [");
			for(int i=front+1; i<tail; i++){
				str.append(arrayQueue[i]+",");
			}
			str.append(arrayQueue[tail]+"]");
			return str.toString();
		}
	}
}

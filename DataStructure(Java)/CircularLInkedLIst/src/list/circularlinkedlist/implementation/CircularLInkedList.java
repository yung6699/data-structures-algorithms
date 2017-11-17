package list.circularlinkedlist.implementation;

public class CircularLInkedList {

	private Node head;
	private Node tail;

	private int size = 0;

	private class Node {
		private Object data;
		private Node next;

		public Node(Object input) {
			this.data = input;
			this.next = null;
		}

		public String toString() {
			return String.valueOf(this.data);
		}
	}
	
	Node node(int index){
		Node x = head;
		for(int i = 0; i< index; i++){
			x = x.next;
		}
		return x;
	}
		
	public void addFirst(Object input){
		Node newNode = new Node(input);
		if(head == null){
			head = newNode;
			newNode.next = newNode;
			tail = newNode;
			
		} else {
			newNode.next = head;
			head.next = newNode;
			head = newNode;
		}
		size++;
	}
	
	public void add(int k, Object input){
		if(k==0){
			addFirst(input);
		} else {
			Node temp1 = node(k-1);
			Node temp2 = temp1.next;
			Node newNode = new Node(input);
			
			temp1.next = newNode;
			newNode.next = temp2;
			size++;
			if(newNode.next == head){
				tail = newNode;
			}
		}
	}
	
	public void addLast(Object input){
		Node newNode = new Node(input);
		if(size == 0){
			addFirst(input);
		} else {
			Node temp = tail.next;
			tail.next = newNode;
			tail = newNode;
			newNode.next = temp;
			size++;
		}
	}
	
/////////////////////////////////////////////
	
	public Object removeFirst(){
		Node temp = head;
		head = temp.next;
		tail.next = head;
		Object returnData = temp.data;
		temp = null;
		size--;
		return returnData;
	}
	
	public Object remove(int k){
		if(k == 0)
			return removeFirst();
		
		Node temp = node(k-1);
		Node todoDeleted = temp.next;
		temp.next = todoDeleted.next;
		Object returnData = todoDeleted.data;
		if(todoDeleted == tail){
			tail = temp;
		}
		
		todoDeleted = null;
		size--;
		return returnData;		
	}
	
	public Object removeLast(){
		return remove(size-1);
	}
	
	
	public String toString(){
		if(head == null){
			return "[]";
		}
		
		Node temp = head;
		StringBuffer str = new StringBuffer();
		str.append("[");
		for(int i = 0; i <(size*2)-1; i++){
			str.append(temp.data + ",");
			temp = temp.next;
		}
		str.append(temp.data + "]");
		return str.toString();
	}
	
	public int size() {
		return size;
	}

	public Object get(int k) {
		Node temp = node(k);
		return temp.data;
	}
	
	public int indexOf(Object data) {
		// 탐색 대상이 되는 노드를 temp로 지정합니다.
		Node temp = head;
		// 탐색 대상이 몇번째 엘리먼트에 있는지를 의미하는 변수로 index를 사용합니다.
		int index;
		// 탐색 값과 탐색 대상의 값을 비교합니다.
		
		for(index = 0; index < size; index++){
			if(temp.data == data)
				return index;
			temp = temp.next;
		}

		return -1;
	}
	
	// 역순으로 바꾸기
	public void reverse() {
		Node temp = tail;
		Node current = null;
		Node pre = null;
		int i = 1;

		while (i < size) {
			current = node(size - i);
			pre = node(size - (i + 1));

			current.next = pre;
			tail = pre;
			pre.next = null;
			i++;
		}
		head = temp;
		tail.next = head;
	}
	

}

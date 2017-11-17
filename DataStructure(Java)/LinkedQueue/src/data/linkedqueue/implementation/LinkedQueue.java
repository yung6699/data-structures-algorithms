package data.linkedqueue.implementation;

public class LinkedQueue {

	private Node head;
	private Node tail;
	private int index = -1;
	private int queueSize;

	private class Node {
		private Object data;
		private Node next;

		public Node(Object data) {
			this.data = data;
			this.next = null;
		}
	}

	public LinkedQueue(int queueSize) {
		this.queueSize = queueSize;
		head = null;
		tail = null;
	}

	public boolean isEmpty() {
		return (head == null);
	}

	public boolean isFull() {
		return (index == queueSize - 1);
	}

	public void push(Object data) {

		if (isFull()) {
			System.out.println("큐가 꽉 찼습니다.");
		} else {
			Node newNode = new Node(data);
			
			// 큐는 처음 넣는건지 아닌지 판별해야한다.
			// 큐는 앞에 노드가 뒤의 노드를 가리키는 구조로 되어있다.
			if (isEmpty()) {
				head = newNode;
				tail = head;
			} else {
				tail.next = newNode;
				tail = tail.next;
			}
			index++;
		}
	}

	public Object pop() {

		if (isEmpty()) {
			return "꺼낼 데이터가 없습니다.";

		} else {
			Object temp = head.data;
			head = head.next;
			index--;
			return temp;
		}
	}

	public String toString() {
		StringBuffer str;
		if (isEmpty()) {
			return "큐가 비었습니다";

		} else {
			Node temp = head;
			str = new StringBuffer();
			str.append("LinkedQueue >> [");
			while (temp.next != null) {
				str.append(temp.data + ",");
				temp = temp.next;
			}
			str.append(temp.data + "]");
			return str.toString();
		}

	}
}

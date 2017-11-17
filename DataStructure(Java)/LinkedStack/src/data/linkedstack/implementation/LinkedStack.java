package data.linkedstack.implementation;

public class LinkedStack {

	private Node top;
	private int stackSize;
	// 링크드 리스트 개수 제한이 필요 없지만
	// 굳이 개수를 제한 하려면 인위적으로 
	// 인덱스를 만들어서 사용해야함
	private int index = -1;

	private class Node {
		// 데이터가 저장될 필드
		private Object data;
		// 다음 노드를 가리키는 필드
		private Node next;

		public Node(Object input) {
			this.data = input;
			this.next = null;
		}

		// 노드의 내용을 쉽게 출력해서 확인해볼 수 있는 기능
		public String toString() {
			return String.valueOf(this.data);
		}
	}

	public LinkedStack(int stackSize) {
		top = null;
		this.stackSize = stackSize;
	}

	public boolean isEmpty() {
		return (top == null);
	}

	public boolean isFull() {
		return (index == stackSize - 1);
	}

	// 스택은 새로만든 것이 전에 노드를 가리키는 구조로 되어있다.
	// 즉 뒤의 노드가 앞의 노드를 가리킨다. 큐와 반대 구조다.
	public void push(Object input) {
		if (isFull()) {
			System.out.println("스택이 꽉 찼습니다.");
		} else {
			Node newNode = new Node(input);
			newNode.next = top;
			top = newNode;
			index++;
		}
	}

	public Object pop() {
		if (isEmpty()) {
			return "꺼낼 데이터가 없습니다.";
		} else {
			Object popData = top.data;
			top = top.next;
			index--;
			return popData;
		}
	}

	public String toString() {
		StringBuffer str;
		if (isEmpty()) {
			return "스택이 비어있습니다.";
		} else {
			str = new StringBuffer();
			Node temp = top;
			str.append("Linked Stack \n");
			while (temp.next!= null) {
				str.append(temp.data+"\n");
				temp = temp.next;
			}
			str.append(temp.data);
			return str.toString();
		}
	}
}

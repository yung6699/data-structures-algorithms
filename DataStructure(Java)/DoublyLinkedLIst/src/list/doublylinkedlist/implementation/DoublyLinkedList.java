package list.doublylinkedlist.implementation;

public class DoublyLinkedList {

	private Node head;
	private Node tail;
	private int size = 0;

	private class Node {
		private Object data;
		private Node prev;
		private Node next;

		private Node(Object input) {
			this.data = input;
			this.prev = null;
			this.next = null;
		}

		public String toString() {
			return String.valueOf(this.data);
		}
	}

	public void addFirst(Object input) {
		Node newNode = new Node(input);
		// 맨 앞 노드의 다음노드의 주소 저장 , head는 아직 만들기 전 노드를 가리키고 있다.
		newNode.next = head;
		// 다음 노드의 previous에 새로 추가한 노드의 주소를 저장
		// 단 아무것도 없을때 노드 추가시 head는 null이기 때문에 에러가 날 수 있다.
		// 따라서 조건문으로 처리 한다.
		if (head != null) {
			head.prev = newNode;
		}
		head = newNode;
		size++;
		if (head.next == null) {
			tail = head;
		}
	}

	public void addLast(Object input) {
		Node newNode = new Node(input);
		if (size == 0) {
			addFirst(input);
		} else {
			tail.next = newNode;
			newNode.prev = tail;
			tail = newNode;
			size++;
		}
	}

	Node node(int index) {
		Node x = null;
		if (index < size / 2) {
			x = head;
			for (int i = 0; i < index; i++) {
				x = x.next;
			}

		} else {
			x = tail;
			for (int i = size - 1; i > index; i--) {
				x = x.prev;
			}
		}

		return x;
	}

	public void add(int k, Object input) {

		if (k == 0) {
			addFirst(input);
		} else {
			Node temp1 = node(k - 1);
			Node temp2 = temp1.next;
			Node newNode = new Node(input);

			temp1.next = newNode;
			newNode.prev = temp1;

			// 마지막에 추가되는 경우가 있음
			if (temp2 != null) {
				temp2.prev = newNode;
			}
			newNode.next = temp2;
			size++;

			if (newNode.next == null) {
				tail = newNode;
			}
		}
	}

	/////////////////////////////////////////////////////////

	public Object removeFirst() {
		// 첫번째 노드를 temp로 지정하고 head의 값을 두번째 노드로 변경합니다.
		Node temp = head;
		head = temp.next;
		// 데이터를 삭제하기 전에 리턴할 값을 임시 변수에 담습니다.
		Object returnData = temp.data;
		temp = null;
		// 노드가 1개만 있을때
		if (head != null) {
			head.prev = null;
		}
		size--;
		return returnData;
	}

	public Object remove(int k) {

		if (k == 0) {
			return removeFirst();
		}
		Node temp = node(k - 1);
		Node todoDeleted = temp.next;
		temp.next = todoDeleted.next;

		// 마지막꺼 삭제시 temp.next는 널 값이라 prev프로퍼티를 가질 수 없다.
		if (temp.next != null) {
			temp.next.prev = temp;
		}
		Object returnData = todoDeleted.data;

		if (todoDeleted == tail) {
			tail = temp;
		}

		todoDeleted = null;
		size--;
		return returnData;

	}

	public Object removeLast() {
		return remove(size - 1);
	}

	////////////////////////////////////////////////////////////
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
		int index = 0;
		// 탐색 값과 탐색 대상의 값을 비교합니다.
		while (temp.data != data) {
			temp = temp.next;
			index++;
			// temp의 값이 null이라는 것은 더 이상 탐색 대상이 없다는 것을 의미합니다.이 때 -1을 리턴합니다.
			if (temp == null)
				return -1;
		}
		// 탐색 대상을 찾았다면 대상의 인덱스 값을 리턴합니다.
		return index;
	}

	public String toString() {
		// 노드가 없다면 []를 리턴합니다.
		if (head == null) {
			return "[]";
		}
		// 탐색을 시작합니다.
		Node temp = head;
		StringBuffer str = new StringBuffer();
		str.append("[");
		// 다음 노드가 없을 때까지 반복문을 실행합니다.
		// 마지막 노드는 다음 노드가 없기 때문에 아래의 구문은 마지막 노드는 제외됩니다.
		while (temp.next != null) {
			str.append(temp.data + ",");
			temp = temp.next;
		}
		// 마지막 노드를 출력결과에 포함시킵니다.
		str.append(temp.data + "]");
		return str.toString();
	}

	// 역순 출력
	public String reverseToString() {

		if (tail == null) {
			return "[]";
		}

		Node temp = tail;
		StringBuffer str = new StringBuffer();
		str.append("[");
		// 다음 노드가 없을 때까지 반복문을 실행합니다.
		// 마지막 노드는 다음 노드가 없기 때문에 아래의 구문은 마지막 노드는 제외됩니다.
		while (temp.prev != null) {
			str.append(temp.data + ",");
			temp = temp.prev;
		}
		// 마지막 노드를 출력결과에 포함시킵니다.
		str.append(temp.data + "]");

		return str.toString();
	}

	///////////////////////////////////////////////////////

	public ListIterator listIterator() {
		return new ListIterator();

	}

	class ListIterator {
		private Node lastReturned;
		private Node prev;
		private Node next;
		private int nextIndex;

		ListIterator() {
			next = head;
			nextIndex = 0;
		}

		public Object next() {
			if(next == null){
				next = head;
			}
			lastReturned = next;
			next = next.next;
			nextIndex++;
			return lastReturned.data;
		}

		public boolean hasNext() {
			return nextIndex < size();
		}

		public Object previous() {
			if (next == null) {
				lastReturned = tail;
				next = lastReturned.prev;
			} else {
				lastReturned = next;
				next = next.prev;
			}
			nextIndex--;
			return lastReturned.data;
		}

		public boolean hasPrevious() {
			return nextIndex > 0;
		}

		public void add(Object input) {
			Node newNode = new Node(input);
			if (lastReturned == null) {
				head = newNode;
				newNode.next = next;
				next.prev = newNode;

			} else {
				lastReturned.next = newNode;
				newNode.prev = lastReturned;

				if (next != null) {
					newNode.next = next;
					next.prev = newNode;
				} else {
					tail = newNode;
				}
			}

			lastReturned = newNode;
			nextIndex++;
			size++;
		}

		public void remove() {
			if (nextIndex == 0) {
				throw new IllegalStateException();
			}
			// DoublyLinkedList.this.remove(nextIndex -1);
			// nextIndex--;

			Node n = lastReturned.next;
			Node p = lastReturned.prev;

			// else 부분은 중간삭제시
			// 맨 처음 노드 삭제시
			if (p == null) {
				head = n;
				head.prev = null;
				lastReturned = null;

			} else {
				p.next = next;
				lastReturned.prev = null;
			}
			
			// 마지막 삭제시
			if (n == null) {
				tail = p;
				tail.next = null;
			} else {
				n.prev = p;
			}

			if (next == null) {
				lastReturned = tail;
			} else {
				lastReturned = next.prev;
			}

			size--;
			nextIndex--;
		}
		
	}

}

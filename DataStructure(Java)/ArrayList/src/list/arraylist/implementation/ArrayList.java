package list.arraylist.implementation;

public class ArrayList {

	// 몇개의 데이터가 있는지 카운팅
	private int size = 0;
	private Object[] elementData = new Object[100];
	// 리버스를 위한 임시 변수
	private Object[] temp = null;

	/////////////////////////////////////////////////////
	// 배열 맨처음에 추가
	public void addFirst(Object element) {
		add(0, element);
	}

	// 배열 마지막에 엘리먼트 추가
	// 마지막에 추가할 때는 그냥 추가가 낫다.
	// add 메소드 호출하여 하면 반복문을 실행함으로 추가 오버헤드가 발생하여
	// 시간이 더 소요된다.
	public void addLast(Object element) {
		elementData[size] = element;
		size++;
		// return add(size,element);
	}

	// 중간에 추가
	public void add(int index, Object element) {

		for (int i = size - 1; i >= index; i--) {
			elementData[i + 1] = elementData[i];
		}
		elementData[index] = element;
		size++;
	}

	//////////////////////////////////////////////////
	// 요소삭제
	public Object remove(int index) {
		Object removed = elementData[index];
		for (int i = index + 1; i <= size - 1; i++) {
			elementData[i - 1] = elementData[i];
		}
		size--;
		// 맨 마지막에 남아있는거 삭제
		elementData[size] = null;
		return removed;
	}

	public Object removeFirst() {
		return remove(0);
	}

	public Object removeLast() {
		Object removed = elementData[size - 1];
		elementData[size - 1] = null;
		size--;
		return removed;
		// return remove(size - 1);
	}

	///////////////////////////////////////////////////////
	// 특정 인덱스의 값 가져오기
	public Object get(int index) {
		return elementData[index];
	}

	// 사이즈 출력
	public int size() {
		return size;
	}

	// 특정 값을 가진 요소의 인덱스 검색
	public int indexOf(Object o) {
		for (int i = 0; i < size; i++) {
			if (o.equals(elementData[i])) {
				return i;
			}
		}
		return -1;
	}

	// 배열 역으로 바꾸기
	public void reverse() {
		temp = new Object[size];
		int count = size;
		size = 0;
		
		// 임시 변수에 복사
		for (int i = 0; i < count; i++) {
			temp[i] = elementData[i];
		}
		
		for (int i = count - 1; i >= 0; i--) {
			addLast(temp[i]);
		}
		
		temp = null;
	}

	///////////////////////////////////////////////////////////////

	public ListIterator listIterator() {
		return new ListIterator();
	}

	class ListIterator {
		private int nextIndex = 0;

		// 각 인덱스 크기만큼만 반복자가 실행되도록 하기 위한 조건
		public boolean hasNext() {
			return nextIndex < size();
		}

		public Object next() {
			return elementData[nextIndex++];
		}

		public boolean hasPrevious() {
			return nextIndex > 0;
		}

		public Object previous() {
			return elementData[--nextIndex];
		}

		public void add(Object element) {
			ArrayList.this.add(nextIndex++, element);
		}

		public void remove() {
			System.out.println("삭제한 값 : " + ArrayList.this.remove(nextIndex - 1));
			nextIndex--;
		}
	}

	/////////////////////////////////////////////////////////////
	// 배열에 들어있는 값 출력
	public String toString() {

		StringBuffer str = new StringBuffer();
		str.append("[");
		for (int i = 0; i < size; i++) {
			str.append(elementData[i]);
			// 콤마 출력
			if (i < size - 1) {
				str.append(",");
			}
		}
		str.append("]");

		String str1 = str.toString();
		return str1;
	}

	// 역순 출력
	public String reverseString() {

		StringBuffer str = new StringBuffer();
		str.append("[");
		for (int i = size - 1; i >= 0; i--) {
			str.append(elementData[i]);
			// 콤마 출력
			if (i > 0) {
				str.append(",");
			}
		}
		str.append("]");
		String str1 = str.toString();
		return str1;
	}
}

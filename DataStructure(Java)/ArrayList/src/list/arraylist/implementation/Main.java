package list.arraylist.implementation;

public class Main {

	public static void main(String[] args) {

		ArrayList numbers = new ArrayList();

		numbers.addFirst(5);
		
		// 리스트 마지막에 추가
		numbers.addLast(10);
		numbers.addLast(20);
		numbers.addLast(30);
		numbers.addLast(37);
		numbers.addLast(40);

		// 1위치에 15삽입
		numbers.add(1, 15);
		numbers.addFirst(5);

		// list 출력
		System.out.println("리스트 출력 : " + numbers);
		numbers.reverse();
		System.out.println("리버스 결과 : " + numbers);
		System.out.println("리스트에 저장된 크기 : " + numbers.size());
		System.out.println("역순 출력 : " + numbers.reverseString());
		System.out.println();

		// delete
		System.out.println("삭제한 값 : " + numbers.remove(1));
		System.out.println("삭제한 값 : " + numbers.removeFirst());
		System.out.println("삭제한 값 : " + numbers.removeLast());
		System.out.println("삭제하고 난 리스트 : " + numbers + "\n");

		// get
		System.out.println("가져온 값 : " + numbers.get(0));
		System.out.println("가져온 값 : " + numbers.get(1));
		System.out.println("가져온 값 : " + numbers.get(2));
		System.out.println("가져온 값 : " + numbers.get(3));
		System.out.println();

		// size, indexOf
		System.out.println("리스트에 저장된 크기 : " + numbers.size());
		System.out.println("인덱스 값 : " + numbers.indexOf(20));
		System.out.println();
		// for(int i = 0; i<numbers.size(); i++){
		// System.out.println(numbers.get(i));
		// }

		// Iterator 구현
		ArrayList.ListIterator li = numbers.listIterator();

		while (li.hasNext()) {
			System.out.println("반복자 이용한 값 : " + li.next());
		}

		System.out.println();

		while (li.hasPrevious()) {
			System.out.println("되돌아오기 반복자 값 : " + li.previous());
		}

		System.out.println();

		while (li.hasNext()) {
			int number = (int) li.next();
			if (number == 30) {
				li.add(35);
				// li.remove();
			}
		}
		System.out.println(numbers);
	}

}

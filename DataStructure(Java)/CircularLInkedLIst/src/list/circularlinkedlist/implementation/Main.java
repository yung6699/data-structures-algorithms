package list.circularlinkedlist.implementation;


public class Main {

	public static void main(String[] args) {
		CircularLInkedList numbers = new CircularLInkedList();
		numbers.addFirst(10);
		numbers.addLast(40);
		numbers.addLast(65);
		numbers.addLast(70);
		
		numbers.add(1,20);
		
		System.out.println("원형 연결 리스트 : " + numbers);
		System.out.println("리스트 크기 : " + numbers.size());
		System.out.println("인덱스로 데이터 찾기 " + numbers.get(3));
		System.out.println("첫번째 노드 삭제 : " + numbers.removeFirst());
		System.out.println("원형 연결 리스트 : " + numbers);
		
		System.out.println("특정 데이터를 가진 인덱스: "+numbers.indexOf(65));
		
		numbers.reverse();
		System.out.println("역순으로 재정렬 : " + numbers);

	}

}

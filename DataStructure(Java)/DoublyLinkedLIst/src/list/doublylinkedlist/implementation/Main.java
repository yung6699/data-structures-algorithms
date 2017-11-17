package list.doublylinkedlist.implementation;

public class Main {
	public static void main(String[] args) {
		DoublyLinkedList numbers = new DoublyLinkedList();
		numbers.addLast(40);
		numbers.addLast(65);
		numbers.addLast(70);
		
		numbers.addLast(10);
		numbers.addLast(15);
		numbers.addLast(20);
		numbers.addLast(30);
		
		numbers.add(1, 11);
		
		System.out.println(numbers.get(0));
		System.out.println(numbers.get(1));
		System.out.println(numbers.get(2));
		System.out.println(numbers);
		
		DoublyLinkedList.ListIterator li = numbers.listIterator();
		while(li.hasNext()){
		    if((int)li.next() == 15)
		        li.add(16);
		}
		System.out.println("반복자 돌리면서 추가 : " + numbers);
		
		while(li.hasPrevious()){
		    li.previous();
		}
		
		while(li.hasNext()){
		    if((int)li.next() == 15)
		        li.remove();
		}
		System.out.println("반복자에서 삭제 : " + numbers);
		System.out.println();
		
		
		System.out.println("역순으로 출력 : " + numbers.reverseToString());
		
		numbers.remove(3);
		numbers.removeFirst();
		numbers.removeLast();
		System.out.println("삭제 후 결과 : " + numbers);
		System.out.println("리스트 크기 : " + numbers.size());
		
		System.out.println("특정 데이터를 가진 인덱스: "+numbers.indexOf(20));
		

	}
}

package list.linkedlist.implementation;

public class Main {

	public static void main(String[] args) {
		
		
		LinkedList numbers = new LinkedList();
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
		
		LinkedList.ListIterator li = numbers.listIterator();
		while(li.hasNext()){
		    if((int)li.next() == 15)
		        li.remove();
		}
		System.out.println("반복자 돌리면서 추가 : " + numbers);

		
		LinkedList.ListIterator lli = numbers.listIterator();
		while(lli.hasNext()){
		    if((int)lli.next() == 11)
		        lli.add(12);
		}
		System.out.println("반복자에서 삭제 : " + numbers);
		System.out.println();
		
		numbers.reverse();
		System.out.println("역순으로 재정렬 : " + numbers);
		
		numbers.remove(3);
		numbers.removeFirst();
		numbers.removeLast();
		System.out.println("삭제 후 결과 : " + numbers);
		System.out.println("리스트 크기 : " + numbers.size());
		
		System.out.println("특정 데이터를 가진 인덱스: "+numbers.indexOf(20));
		

	}

}

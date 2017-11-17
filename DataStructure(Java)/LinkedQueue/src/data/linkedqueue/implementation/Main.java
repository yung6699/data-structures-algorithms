package data.linkedqueue.implementation;

public class Main {

	public static void main(String[] args) {
		LinkedQueue queue = new LinkedQueue(4);
		
		queue.push("A");
		System.out.println(queue);
		
		queue.push("B");
		System.out.println(queue);
		
		queue.push("C");
		System.out.println(queue);
		
		queue.push("D");
		System.out.println(queue);
		
		queue.push("E");
		
		System.out.println("꺼낸 데이터 "+queue.pop());
		System.out.println(queue);
		
		queue.push("E");
		System.out.println(queue);
		

		System.out.println("꺼낸 데이터 : "+queue.pop());
		System.out.println("꺼낸 데이터 : "+queue.pop());
		System.out.println("꺼낸 데이터 : "+queue.pop());
		System.out.println("꺼낸 데이터 : "+queue.pop());
		System.out.println("꺼낸 데이터 : "+queue.pop());
		
		System.out.println(queue);

		



	}

}

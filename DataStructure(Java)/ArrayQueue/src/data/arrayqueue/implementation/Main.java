package data.arrayqueue.implementation;

public class Main {

	public static void main(String[] args) {
		ArrayQueue queue = new ArrayQueue(3);

		queue.push("A");
		System.out.println(queue);

		queue.push("B");
		System.out.println(queue);

		queue.push("C");
		System.out.println(queue);

		queue.push("C");

		System.out.println("큐에서 꺼낸 데이터 : " + queue.pop());
		System.out.println("큐에서 꺼낸 데이터 : " + queue.pop());
		System.out.println("큐에서 꺼낸 데이터 : " + queue.pop());
		System.out.println("큐에서 꺼낸 데이터 : " + queue.pop());
	}

}

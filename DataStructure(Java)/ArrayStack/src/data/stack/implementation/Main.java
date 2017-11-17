package data.stack.implementation;

public class Main {

	public static void main(String[] args) {
		ArrayStack stack = new ArrayStack(4);

		stack.push("A");
		System.out.println(stack + "\n");

		stack.push("B");
		System.out.println(stack + "\n");

		stack.push("C");
		System.out.println(stack + "\n");

		stack.push("D");
		System.out.println(stack + "\n");

		System.out.println("꺼낸 데이터 : " + stack.pop());
		System.out.println(stack + "\n");

		stack.push("E");
		System.out.println(stack + "\n");

		System.out.println("꺼낸 데이터 : " + stack.pop());
		System.out.println("꺼낸 데이터 : " + stack.pop());
		System.out.println("꺼낸 데이터 : " + stack.pop());
		System.out.println("꺼낸 데이터 : " + stack.pop());
		System.out.println("꺼낸 데이터 : " + stack.pop());

		System.out.println(stack);

	}
}

package data.linkedstack.implementation;

public class Main {

	public static void main(String[] args) {

		LinkedStack stack = new LinkedStack(4);
		
		stack.push("A");
		System.out.println(stack);
		
		stack.push("B");
		System.out.println(stack);
		
		stack.push("C");
		System.out.println(stack);
		
		stack.push("D");
		System.out.println(stack);
		
		stack.push("E");
		

		System.out.println("꺼낸 데이터 "+stack.pop());
		System.out.println(stack);
		
		stack.push("E");
		System.out.println(stack);
		
		System.out.println("꺼낸 데이터 : "+stack.pop());
		System.out.println("꺼낸 데이터 : "+stack.pop());
		System.out.println("꺼낸 데이터 : "+stack.pop());
		System.out.println("꺼낸 데이터 : "+stack.pop());
		System.out.println("꺼낸 데이터 : "+stack.pop());
		
		System.out.println(stack);


	}

}

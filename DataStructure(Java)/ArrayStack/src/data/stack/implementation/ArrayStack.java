package data.stack.implementation;

public class ArrayStack {
	
	// 스택의 인덱스 즉 위치
	private int top;
	private int stackSize;
	private Object elementData[];
	
	public ArrayStack(int stackSize) {
		// -1은 아무것도 없을 때 위치
		top = -1;
		// 원하는 사이즈를 받는다.
		this.stackSize = stackSize;
		elementData = new Object[this.stackSize];
	}
	
	// top이 -1이면 비었다는 뜻, true 반환
	public boolean isEmpty(){
		return (top == -1);
	}
	
	// 전체 크기에서 -1하면 마지막 인덱스 숫자랑 같다.
	// top이 마지막 인덱스를 가리킴 -> 스택이 꽉 찼다는 의미이다.
	public boolean isFull(){
		return (top == this.stackSize -1 );
	}
	
	// 스택에 값을 넣는 메소드
	public void push(Object data){
		// 스택이 찼는지 검사한다.
		// 안 찼으면 넣는다.
		if(isFull()){
			System.out.println("스택이 꽉 찼습니다.");
		} else {
			
			// 새로 넣을때 우선 top을 +1하고 넣는다.
			elementData[++top] = data;
			System.out.println("스택에 삽입 : " + data);
		}
	}
	
	public Object pop(){
		// 꺼내기 전에 비었는지 확인
		if(isEmpty()){
			return "꺼낼 데이터가 없습니다.";
		} else {
			// 맨 위에부터 꺼낸다.
			// 꺼낸 후 top이 가리키는 위치의 요소를 없앤다.
			// 그후 top의 위치를 낮춘다.
			Object temp = elementData[top];
			elementData[top] = null;
			top--;
			return temp;
		}
	}
	
	public String toString(){
		StringBuffer str = null;
		if(isEmpty()){
			return "스택이 비어있습니다.";
		} else {
			str = new StringBuffer();
			str.append("Array Stack -> [");
			for(int i = 0; i < top; i++){
				str.append(elementData[i]+",");
			}
			str.append(elementData[top] + "]");	
			return str.toString();
		}
	}
	
}

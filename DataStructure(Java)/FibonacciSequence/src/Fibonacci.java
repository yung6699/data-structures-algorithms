
public class Fibonacci {

	public static void main(String args[]) {
		int count = 8;
		for (int i = 1; i < count; i++) {
			System.out.print(fibonacci(i) + " ");
		}
	}

	public static int fibonacci(int x) {
		if (x >= 2) {
			return fibonacci(x - 2) + fibonacci(x - 1);
		} else {
			return x;
		}
	}

}

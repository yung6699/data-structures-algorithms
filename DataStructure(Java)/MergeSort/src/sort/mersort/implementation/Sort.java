package sort.mersort.implementation;

public class Sort {
	private int sorted[] = new int[30];

	public void merge(int a[], int m, int middle, int n) {
		int size = a.length;
		int left, right, k;
		left = m;
		right = middle + 1;
		k = m;

		while (left <= middle && right <= n) {
			if (a[left] <= a[right])
				sorted[k] = a[left++];
			else
				sorted[k] = a[right++];
			k++;
		}

		if (left > middle) {
			for (int i = right; i <= n; i++){
				sorted[k] = a[i];
				k++;
			}
		} else {
			for (int i = left; i <= middle; i++){
				sorted[k] = a[i];
				k++;
			}
		}

		for (int i = m; i<= n; i++)
			a[i] = sorted[i];

		System.out.printf("병합 정렬 >> ");
		for (int i = 0; i < size; i++) {
			System.out.printf(a[i]+" ");
		}
		System.out.println();
	}

	public void mergeSort(int a[], int m, int n) {
		int middle;
		if (m < n) {
			middle = (m + n) / 2;
			mergeSort(a, m, middle);
			mergeSort(a, middle + 1, n);
			merge(a, m, middle, n);
		}
	}
}

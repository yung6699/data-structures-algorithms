function AllSort() {

    // 버블 정렬 O(n^2)
    this.bubbleSort = function(array) {
        for (var i = 0, size = array.length; i < size; i++) {
            for (var j = 0; j < size - 1; j++) {
                if (array[j] > array[j + 1])
                    swap(j, j + 1);
            }
        }
    }

    // 삽입 정렬 O(n^2)
    // 크기가 작은 배열이면 선택,버블 보다 성능이 우수하다.
    this.insertSort = function(array) {
        var size = array.length,
            j, temp;
        for (var i = 1; i < size; i++) {
           j = i;
           temp = array[i];
           while(j >0 && array[j-1] > temp){
              array[j] = array[j-1];
              j--;
           }
           array[j] = temp;
        }
    }

    // 선택정렬 O(n^2)
    this.selectionSort = function(array) {
        for (var i = 0, size = array.length; i < size - 1; i++) {
            var min = i;
            for (var j = i + 1; j < size; j++) {
                if (array[min] > array[j])
                    min = j
            }
            swap(i, min)
        }
    }

    // 병합 정렬 , 분할 정복 알고리즘
    // O(NLogN)
    this.mergeSort = function(array) {
        divide(array);
    }

    // 분할하는 함수
    var divide = function(array) {
        var length = array.length;
        if (length === 1) {
            return array;
        }
        var mid = Math.floor(length / 2),
            left = array.slice(0, mid),
            right = array.slice(mid, length);

        return merge(divide(left), divide(right));
    }

    // 병합 함수
    var merge = function(left, right) {
        var result = [],
            il = 0,
            ir = 0;

        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }

        while (il < left.length) {
            result.push(left[il++]);
        }

        while (ir < right.length) {
            result.push(right[ir++]);
        }

        return result;
    }


    //퀵 정렬 , O(NlogN)
    //기억 할 것!!, 참고 : 윤성우 자료구조 퀵 소트, 파이썬 알고리즘
    //다만 기준을 잘 선택해야한다.
    this.quickSort = function(array) {
        quick_sub(array, 0, array.length - 1)
    }

    var quick_sub = function(array, left, right) {

        if (array.length > 1) {

            var pivot = array[Math.floor((right + left) / 2)],
                i = left, j = right;

            while (i <= j) {

                while (array[i] < pivot) {
                    i++;
                }

                while (array[j] > pivot) {
                    j--;
                }

                if (i <= j) {
                    swap(i, j)
                    i++;
                    j--;
                }
            }

            if (left < i - 1) {
                quick_sub(array, left, i - 1);
            }

            if (i < right) {
                quick_sub(array, i, right);
            }
        }

    }

    var swap = function(index1, index2) {
        var temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }
}

var array = [234,45634,23,41,2345,34,23,1,4,3,6,234,4536,55,234,23,456,45,234,1,856,9,67,56,7];
var sort = new AllSort();
// sort.bubbleSort(array);
// sort.insertSort(array);
// sort.selectionSort(array);
sort.quickSort(array);
// sort.mergeSort(array);
console.log(array);

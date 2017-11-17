function loopfibonacci(num) {
    var fibonacciList = [];
    fibonacciList[0] = 0;
    fibonacciList[1] = 1;

    for (var i = 2; i <= num; i++) {
        fibonacciList[i] = fibonacciList[i - 1] + fibonacciList[i - 2];
    }

    console.log(fibonacciList.join(','));
}



function recursionFibonacci(num) {
    var fibonacciList = [];

    // 재귀함수를 통한 피보나치
    function innerfibonacci(num) {
        if (num >= 2) {
            return innerfibonacci(num - 2) + innerfibonacci(num - 1)
        } else {
            return num;
        }
    }
    for (var i = 0; i <= num; i++) {
        fibonacciList.push(innerfibonacci(i));
    }
    console.log(fibonacciList.join(','));
}


function fibonacci(num) {
    var answer = 0;
    if (num >= 2) {
        answer = fibonacci(num - 1) + fibonacci(num - 2);
    } else {
        return num;
    }
    return answer;
}

loopfibonacci(20);
recursionFibonacci(20);

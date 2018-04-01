
function fib(n){
    return fibo_iter(n, 0, 1);
}

function fibo_iter(x, a, b) {
    if (x == 0) return a;
    else return fibo_iter(x - 1, b, a + b);
}

console.log(fib(20));

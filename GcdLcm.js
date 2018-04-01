/* 
   최대공약수, 최소공배수 구하기 알고리즘
   1. 최대공약수를 구한다.
   2. 주어진 두값을 곱한 값에 최대 공약수를 나누면 최소 공배수가 나온다.
*/

function gcdlcm(a, b) {
    var answer = [];
    var temp = a % b;
    var mtp = a * b;

    while (temp > 0) {
        a = b;
        b = temp
        temp = a % b;
    }

    answer[0] = b;
    answer[1] = mtp / b;

    return answer;
}

console.log(gcdlcm(10, 15));

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var temp = numbers.map(function(value) {
    return value + 2;
})

console.log(temp);

// push 함수는 배열 맨 뒤에 삽입 할 때 쓴다.
// 인자 갯수는 여러개 넣어도 상관없다.
numbers.push(11);
numbers.push(12, 13);

// 배열이 가지고 있는 값의 인덱스값 찾기, 없으면 -1을 반환한다.
console.log(numbers.indexOf(7));
console.log(numbers.indexOf(14));


// 직접 만든 역순 뒤집기
// Array에는 내장 함수로 reverse 함수가 있다.
Array.prototype.makeReverse = function() {
    var head = 0,
        tail = this.length - 1;
    pivot = this.length / 2;

    if (this.length % 2 === 1) {
        for (var i = 0; i < pivot; i++) {
            head += i;
            tail -= i;
            if (head === tail) {
                return this
            } else {
                var temp = this[head];
                this[i] = this[tail];
                this[tail] = temp;
            }
        }
    } else {
        for (var i = 0; i < pivot; i++) {
            head += i;
            tail -= i;
            if (head > tail) {
                return this;
            } else {
                var temp = this[head];
                this[i] = this[tail];
                this[tail] = temp;
            }

        }
    }
}

console.log(numbers.reverse());
console.log(numbers.makeReverse());

console.log("-------------------------------------------------");

// shift, unshift는 큐를 모방한 메소드이다.
// unshift는 배열 앞 부분에 삽입시.
// shift는 맨 앞에 값을 삭제시 사용한다.
// pop은 배열 맨 뒷부분 삭제시

numbers.unshift(-2);
numbers.unshift(-4, -3);
console.log(numbers);

numbers.shift();
console.log(numbers);

console.log("맨 마지막 값 : " + numbers.pop());
console.log(numbers);

console.log("-------------------------------------------------");
/*
    splice함수 인자 순서 ->
    추가/삭제하려는 인덱스, 삭제할 원소 개수, 이후 배열로 추가할 나열된 원소들
    * splice 사용법은 알아두면 배열 자료구조 작성이 매우 도움이 된다.
 */
numbers.splice(0, 2, 12, 13, 14)
console.log(numbers);

numbers.splice(0, 3)
console.log(numbers);


console.log("---------------------------------------------");
// concat 함수는 배열 또는 특정 값을 추가, 합칠 때 쓴다.
var zero = 0;
var positiveNumbers = [1, 2, 3];
var negativeNumbers = [-3, -2, -1];
var numbers02 = positiveNumbers.concat(zero, negativeNumbers);
console.log(numbers02);

console.log("---------------------------------------------");
// sort 함수는 정렬할 때 사용 한다.
// a - b는 오름차순, b - a는 내림차순이다.
var numbers03 = [4, 1, 7, 8, 10, 5, 6, 2, 9, 3, 15, 11, 21, 20];
numbers03.sort(function(a, b) { console.log(a, b); return a - b; });

console.log(numbers03);

numbers03.sort(function(a, b) { return b - a; });

console.log(numbers03);

var friends = [
    { name: 'John', age: 34 },
    { name: 'Camila', age: 21 },
    { name: 'Jack', age: 30 }
];

function comparePerson(a, b) {
    // if (a.age < b.age) {
    //     return -1;
    // } else if (a.age > b.age) {
    //     return 1;
    // } else {
    //     return 0;
    // }

    return a.age < b.age ? -1 : a.age > b.age ? 1 : 0; // 여러 조건문을 삼항 연산자 중첩으로 표기 가능
}
console.log(friends.sort(comparePerson));

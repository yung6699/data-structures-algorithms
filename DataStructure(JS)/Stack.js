/*
    Stack(스택) -> 후입 선출
    마지막에 들어간게 제일 먼저 나온다.
    링크드 리스트, 순차 두가지 다 가능한데 빠르게 문제 풀때는 배열로 만드는게 편하다.
 */

function Stack() {

    var items = [];

    this.push = function() {
        for (var item of arguments){ //ES6 for of 사용
            items.push(item); // 배열의 push             
        }
    }

    this.pop = function() {
        return items.pop(); // 배열의 pop
    }

    this.peek = function() {
        return items[items.length - 1];
    }

    this.isEmpty = function() {
        return items.length === 0;
    }

    this.clear = function() {
        items = [];
    }

    this.size = function() {
        return items.length;
    }

    this.print = function() {
        console.log(items.toString());
    }
}

exports.Stack = Stack;

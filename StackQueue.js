/* 
  큐로 스택 구현하기
  큐 2개를 활용한다.
*/

function Stack() {
  var inQueue = [];
  var outQueue = [];

  this.pop = function () {
    return inQueue.shift()
  }

  this.push = function (value) {

    while (inQueue.length) {
      outQueue.push(inQueue.shift());
    }

    inQueue.push(value);

    while (outQueue.length) {
      inQueue.push(outQueue.shift())
    }
  }

}

var stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");

console.log(stack.pop());
console.log(stack.pop());

stack.push("D");

console.log(stack.pop());
console.log(stack.pop());
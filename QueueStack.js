/* 
  스택으로 큐 만들기
  스택 2개를 활용하면 된다.
*/

function Queue(){
  var stackInBox = [];
  var stackOutBox = [];

  this.enQueue = function(value){
    stackInBox.push(value)
  }

  this.deQueue = function(){
    if(stackOutBox.length === 0){
      while(stackInBox.length){
        stackOutBox.push(stackInBox.pop());
      }  
    }
    return stackOutBox.pop(); 
  }
}

var queue = new Queue();
queue.enQueue("A");
queue.enQueue("B");
queue.enQueue("C");

console.log(queue.deQueue());
console.log(queue.deQueue());
queue.enQueue("D");

console.log(queue.deQueue());
console.log(queue.deQueue());
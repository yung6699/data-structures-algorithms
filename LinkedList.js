function LinkedList() {
    var Node = function (element) {
        this.element = element;
        this.next = null;
    };

    var length = 0;
    var head = null;

    // 링크드 리스트 끝에 노드 추가하는 함수
    this.append = function (element) {
        var node = new Node(element),
            current;
        if (head === null) {
            head = node
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }

        length++;
    }

    // 노드의 위치를 기준으로 삭제하는 함수
    this.removeAt = function (position) {

        // 링크드 리스트 범위 안이 맞는지 확인
        if (position >= 0 && position < length) {
            var current = head,
                previous,
                index = 0;

            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
                length--;

                return current.element;
            }
        } else {
            return null;
        }

    }


    // 특정 값을 가진 노드를 삭제한다.   
    this.remove = function (element) {
        var index = this.indexOf(element);
        return this.removeAt(index);
    };


    // 해당 위치에 원소를 삽입한다. 맨 앞, 맨 끝 포함
    this.insert = function (position, element) {
        if (position >= 0 && position <= length) {
            var node = new Node(element),
                current = head,
                previous,
                index = 0;

            if (position == 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }

            length++;
            return true;
        } else {
            return false;
        }
    }

    this.reverse = function () {
        
        var current, previous, temp;
        current = head;
        previous = null;

        while (current) {
            temp = previous;
            previous = current;
            current = current.next;
            previous.next = temp;
        }

        head = previous;
    }

    this.getNode = function (position) {
        var current = head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    }

    this.getElement = function (position) {
        return this.getNode(position).element;
    }

    // 해당 원소의 인덱스 반환
    this.indexOf = function (element) {
        var current = head,
            index = 0;

        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }

        return -1;
    }

    this.size = function () {
        return length;
    }

    this.isEmpty = function () {
        return length === 0;
    }

    this.getHead = function () {
        return head;
    }

    this.toString = function () {
        var current = head,
            string = '';

        while (current) {
            string += current.element + ' ';
            current = current.next;
        }
        return string;
    }
}


var linkedList = new LinkedList();

linkedList.append(1)
// linkedList.append(5)
linkedList.append(2)
linkedList.append(3)
linkedList.append(7)

// linkedList.insert(2, 10);

// console.log(linkedList.toString());
// console.log(linkedList.indexOf(10));

// linkedList.remove(7);
// linkedList.removeAt(1);
// console.log(linkedList.toString());

console.log(linkedList.toString());
linkedList.reverse()
console.log(linkedList.toString());
// console.log(linkedList.toString());
// console.log(linkedList.getElement(3));

// linkedList.reverse()
// console.log(linkedList.toString());
// console.log(linkedList.isEmpty());
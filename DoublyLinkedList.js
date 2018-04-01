function DoublyLinkedList() {

    var Node = function(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    };

    var length = 0;
    var head = null;
    var tail = null;

    this.append = function(element) {
        var node = new Node(element),
            current;
        if (head == null) {
            head = node
            tail = node
        } else {
            current = tail
            current.next = node;
            node.prev = current;
            tail = node;
        }

        length++;
    }

    this.insert = function(position, element) {

        if (position >= 0 && position <= length) {
            var node = new Node(element),
                current = head,
                previous,
                index = 0;

            // 연결시 맨 앞, 맨 뒤, 중간 3가지 경우의 수를 가지고 만들어야 한다.
            if (position === 0) {
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if (position === length) {
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }

            length++;
            return true;
        } else {
            return false;
        }
    };

    this.removeAt = function(position) {

        if (position >= 0 && position < length) {
            var current = head,
                previous,
                index = 0;

            if (position === 0) {
                head = current.next;

                if (length === 1) {
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (position === length - 1) {
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next
                }

                previous.next = current.next;
                current.next.prev = previous;
            }

            length--;
            return current.element;
        } else {
            return null;
        }
    };

    this.remove = function(element) {
        var index = this.indexOf(element);
        return this.removeAt(index);
    }

    this.getNode = function(position) {
        var current = head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    }

    this.getElement = function(position) {
        return this.getNode(position).element;
    }

    // 해당 원소의 인덱스 반환
    this.indexOf = function(element) {
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

    this.size = function() {
        return length;
    }

    this.isEmpty = function() {
        return length === 0;
    }

    this.getHead = function() {
        return head;
    }

    this.reverseToString = function() {
        var current = tail,
            string = '';

        while (current) {
            string += current.element + ' ';
            current = current.prev;
        }
        return string;
    }

    this.toString = function() {
        var current = head,
            string = '';

        while (current) {
            string += current.element + ' ';
            current = current.next;
        }
        return string;
    }
}

var doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.append(1)
doublyLinkedList.append(5)
doublyLinkedList.append(3)
doublyLinkedList.append(8)
doublyLinkedList.append(10)

doublyLinkedList.insert(1, 15);

console.log(doublyLinkedList.toString());
console.log(doublyLinkedList.reverseToString());

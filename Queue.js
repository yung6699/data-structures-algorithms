function Queue() {
    var head = null;
    var tail = null;
    var length = 0;

    var Node = function(value) {
        this.next = null;
        this.value = value;
    }

    this.enqueue = function(value) {
        var node = new Node(value),
            current = null;

        if (head == null) {
            head = node;
            tail = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            tail = current.next;
        }

        length++;
    }

    this.dequeue = function() {
        var node = head;
        head = head.next;
        length--;
        return node.value;
    }

    this.isEmpty = function() {
        return (length === 0) ? true : false;
    }

    this.size = function() {
        return length;
    }

    this.toString = function() {
        var current = head,
            string = '';

        while (current) {
            string += current.value + ' ';
            current = current.next;
        }

        return string;
    }
}

exports.Queue = Queue;

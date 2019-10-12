const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._tail = new Node;
        this._head = new Node;
    }

    append(data) {
        var oldTail = this._tail;
        this._tail = new Node(data, null, oldTail);
        if (this.length == 0) this._head = this._tail;
        else oldTail.prev = this._tail;
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var temp = this._head;
        for (var i = 0; i < index; i++) {
            temp = temp.prev;
        }

        return temp.data;
    }

    insertAt(index, data) {                 
        if (this.length > 0) {
            var temp = this._head;
            for (var i = 0; i < index; i++) {
                temp = temp.prev;
            }
            var newNode = new Node(data, temp, temp.next);
            temp.next.prev = newNode;
            this.length++;
        } else this.append(data)
    }

    isEmpty() {
        if (this.length != 0) return false;
        return true;
    }

    clear() {
        this._head = new Node;
        this._tail = this._head;
        this.length = 0;
        return new LinkedList();
    }

    deleteAt(index) {

        var temp = this._head;
        for (var i = 0; i < index; i++) {
            temp = temp.prev;
        }
        if (this.length > 1) {
            temp.prev.next = temp.next;
            temp.next.prev = temp.prev;
        }
        this.length--;
        return this;
    }

    reverse() {

        var temp = null;
        var current = this._head;

        while (current != null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.next;
        }
        if (temp != null) {
            this._head = temp.next;
        }
        temp = this._tail;
        this._tail = this._head;
        this._head = temp;
        return this;
    }

    indexOf(data) {
        var temp = this._head;
        for (var i = 0; i < this.length; i++) {
            if (temp.data == data) return i;
            else temp = temp.prev;
        }
        return -1;
    }
}

module.exports = LinkedList;

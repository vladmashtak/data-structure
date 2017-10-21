"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = (function () {
    function Node(element) {
        this.element = element;
        this.next = null;
    }
    return Node;
}());
var LinkedList = (function () {
    function LinkedList() {
        this.length = 0;
        this.head = null;
    }
    LinkedList.prototype.size = function () {
        return this.length;
    };
    LinkedList.prototype.add = function (element) {
        var node = new Node(element); // create new node
        if (this.head === null) {
            this.head = node; // if head is empty, save new node as head
        }
        else {
            var currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = node; //  after finish search save in next link new node
        }
        this.length++;
    };
    LinkedList.prototype.remove = function (element) {
        var currentNode = this.head, previousNode;
        if (currentNode.element === element) {
            this.head = currentNode.next; // assign head element of the next after head
        }
        else {
            while (currentNode.element !== element) {
                previousNode = currentNode; // save current element as previous
                currentNode = currentNode.next; // save in current element next element after current, for new iteration
            }
            // [head(prev).next -> 1.(current).next -> 2(next).next -> ...] => [head.next -> 2.next -> ...]
            previousNode.next = currentNode.next;
        }
        this.length--;
    };
    LinkedList.prototype.isEmpty = function () {
        return this.length === 0;
    };
    LinkedList.prototype.indexOf = function (element) {
        var currentNode = this.head, index = -1;
        while (currentNode) {
            index++;
            if (currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;
    };
    LinkedList.prototype.elementAt = function (index) {
        var currentNode = this.head, count = 0;
        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.element;
    };
    LinkedList.prototype.addAt = function (index, element) {
        var node = new Node(element);
        var currentNode = this.head, previousNode, currentIndex = 0;
        if (index < 0 || index > this.length) {
            throw new Error('index is out of the linked list');
        }
        if (index === 0) {
            node.next = currentNode; // save current node after the new node
            this.head = node; // save in head a new node
        }
        else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            // [prev.next -> new.next -> current.next -> ...]
            node.next = currentNode;
            previousNode.next = node;
        }
        this.length++;
    };
    LinkedList.prototype.removeAt = function (index) {
        var currentNode = this.head, previousNode, currentIndex = 0;
        if (index < 0 || index >= this.length) {
            throw new Error('index is out of the linked list');
        }
        if (index === 0) {
            // [head.next -> 1.next -> 2.next -> ...] => [head(1).next -> 2.next -> ...]
            this.head = currentNode.next;
        }
        else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            // [head(prev).next -> 1(current).next -> 2(next).next -> ...] => [head.next -> 2.next -> ...]
            previousNode.next = currentNode.next;
        }
        this.length--;
        return currentNode.element;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
var conga = new LinkedList();
conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
conga.add('Fish');
console.log('List: [0: Kitten, 1: Puppy, 2: Dog, 3: Cat, 4: Fish]');
console.log('Size: ', conga.size());
console.log('Remove at 3: ', conga.removeAt(3));
console.log('Element at 3: ', conga.elementAt(3));
console.log('Index of Puppy: ', conga.indexOf('Puppy'));
console.log('Size: ', conga.size());

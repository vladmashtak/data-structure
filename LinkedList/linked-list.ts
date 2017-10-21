class Node<T> {
    public element: T;
    public next: Node<T>;

    constructor(element: T) {
        this.element = element;
        this.next = null;
    }
}
export class LinkedList<T> {
    private length: number = 0;
    private head: Node<T> = null;

    public size(): number {
        return this.length;
    }

    public add(element: T): void {
        const node: Node<T> = new Node<T>(element); // create new node

        if (this.head === null) {
            this.head = node; // if head is empty, save new node as head
        } else {
            let currentNode: Node<T> = this.head;

            while (currentNode.next !== null) { // search last element from head
                currentNode = currentNode.next;
            }

            currentNode.next = node; //  after finish search save in next link new node
        }

        this.length++;
    }

    public remove(element: T): void {
        let currentNode: Node<T> = this.head,
            previousNode: Node<T>;

        if (currentNode.element === element) { // if remove element is first
            this.head = currentNode.next;   // assign head element of the next after head
        } else {
            while (currentNode.element !== element) { // search element
                previousNode = currentNode; // save current element as previous
                currentNode = currentNode.next; // save in current element next element after current, for new iteration
            }
            // [head(prev).next -> 1.(current).next -> 2(next).next -> ...] => [head.next -> 2.next -> ...]
            previousNode.next = currentNode.next;
        }

        this.length--;
    }

    public isEmpty(): boolean {
        return this.length === 0;
    }

    public indexOf(element: T): number {
        let currentNode: Node<T> = this.head,
            index: number = -1;

        while (currentNode) {
            index++;
            if (currentNode.element === element) {
                return index;
            }

            currentNode = currentNode.next;
        }

        return -1;
    }

    public elementAt(index: number): T {
        let currentNode: Node<T> = this.head,
            count: number = 0;

        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }

        return currentNode.element;
    }

    public addAt(index: number, element: T): void {
        const node: Node<T> = new Node<T>(element);

        let currentNode: Node<T> = this.head,
            previousNode: Node<T>,
            currentIndex: number = 0;

        if (index < 0 || index > this.length) {
            throw new Error('index is out of the linked list');
        }

        if (index === 0) {
            node.next = currentNode; // save current node after the new node
            this.head = node; // save in head a new node
        } else {
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
    }

    public removeAt(index: number): T {
        let currentNode: Node<T> = this.head,
            previousNode: Node<T>,
            currentIndex: number = 0;

        if (index < 0 || index >= this.length) {
            throw new Error('index is out of the linked list');
        }

        if (index === 0) {
            // [head.next -> 1.next -> 2.next -> ...] => [head(1).next -> 2.next -> ...]
            this.head = currentNode.next;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            // [head(prev).next -> 1(current).next -> 2(next).next -> ...] => [head.next -> 2.next -> ...]
            previousNode.next = currentNode.next
        }
        this.length--;
        return currentNode.element
    }
}

const conga: LinkedList<string> = new LinkedList<string>();
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
class Node<T> {
    data: T;
    next: Node<T> | null = null;
    prev: Node<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

class DoublyLinkedList<T> {
    head: Node<T> | null = null;
    tail: Node<T> | null = null;
    length = 0;

    isEmpty(): boolean {
        return this.length === 0;
    }

    prepend(data: T): void {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head!.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    append(data: T): void {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    removeFront(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.head!.data;
        this.head = this.head!.next;
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }
        this.length--;
        return result;
    }

    removeBack(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.tail!.data;
        this.tail = this.tail!.prev;
        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
        this.length--;
        return result;
    }

    print(): void {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    reversePrint(): void {
        let current = this.tail;
        while (current) {
            console.log(current.data);
            current = current.prev;
        }
    }

    toArray(): T[] {
        const result: T[] = [];
        let current = this.head;
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }
}

export default DoublyLinkedList;
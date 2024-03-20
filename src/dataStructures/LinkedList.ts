class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty(): boolean {
        return this.length === 0;
    }

    prepend(data: T): void {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        if (this.isEmpty()) {
            this.tail = newNode;
        }
        this.length++;
    }

    append(data: T): void {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            this.tail!.next = newNode;
        }
        this.tail = newNode;
        this.length++;
    }

    print(): void {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    insert(index: number, data: T): void {
        if (index < 0 || index > this.length) {
            throw new Error('Index out of bounds');
        }
        if (index === 0) {
            this.prepend(data);
            return;
        }
        if (index === this.length) {
            this.append(data);
            return;
        }
        const newNode = new Node(data);
        let current = this.head;
        let previous: Node<T> | null = null;
        let i = 0;
        while (i < index) {
            previous = current;
            current = current!.next;
            i++;
        }
        newNode.next = current;
        previous!.next = newNode;
        this.length++;
    }

    remove(index: number): void {
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }
        let current = this.head;
        let previous: Node<T> | null = null;
        let i = 0;
        if (index === 0) {
            this.head = current!.next;
        } else {
            while (i < index) {
                previous = current;
                current = current!.next;
                i++;
            }
            previous!.next = current!.next;
        }
        if (index === this.length - 1) {
            this.tail = previous;
        }
        this.length--;
    }

    get(index: number): T {
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }
        let current = this.head;
        let i = 0;
        while (i < index) {
            current = current!.next;
            i++;
        }
        return current!.data;
    }

    set(index: number, data: T): void {
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }
        let current = this.head;
        let i = 0;
        while (i < index) {
            current = current!.next;
            i++;
        }
        current!.data = data;
    }

    removeValue(data: T): void {
        let current = this.head;
        let previous: Node<T> | null = null;
        while (current) {
            if (current.data === data) {
                if (previous) {
                    previous.next = current.next;
                } else {
                    this.head = current.next;
                }
                if (!current.next) {
                    this.tail = previous;
                }
                this.length--;
                return;
            }
            previous = current;
            current = current.next;
        }
    }

    toArray(): T[] {
        const array: T[] = [];
        let current = this.head;
        while (current) {
            array.push(current.data);
            current = current.next;
        }
        return array;
    }
}

export default LinkedList;

import LinkedList from "./LinkedList";

class LinkedListStack<T> {
    private list = new LinkedList<T>();

    push(element: T): void {
        this.list.prepend(element);
    }

    pop(): T | undefined {
        if (this.list.isEmpty()) {
            return undefined;
        }
        const result = this.list.head!.data;
        this.list.remove(0);
        return result;
    }

    peek(): T | undefined {
        if (this.list.isEmpty()) {
            return undefined;
        }
        return this.list.head!.data;
    }

    isEmpty(): boolean {
        return this.list.isEmpty();
    }

    get size(): number {
        return this.list.length;
    }

    print(): void {
        this.list.print();
    }
}

export default LinkedListStack;
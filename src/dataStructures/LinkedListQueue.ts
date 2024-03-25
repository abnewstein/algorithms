import LinkedList from "./LinkedList";

class LinkedListQueue<T> {
    private list = new LinkedList<T>();

    enqueue(element: T): void {
        this.list.append(element);
    }

    dequeue(): T | undefined {
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

export default LinkedListQueue;
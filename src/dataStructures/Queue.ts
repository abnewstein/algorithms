class Queue<T> {
    private items: { [key: number]: T } = {};
    private rear: number = 0;
    private front: number = 0;

    enqueue(element: T) {
        this.items[this.rear] = element;
        this.rear++;
    }
    dequeue(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return result;
    }
    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.front];
    }
    isEmpty(): boolean {
        return this.front === this.rear;
    }
    size(): number {
        return this.rear - this.front;
    }
    print(): void {
        if (this.isEmpty()) {
            console.log('Queue is empty');
            return;
        }
        let result = '';
        for (let i = this.front; i < this.rear; i++) {
            result += this.items[i] + ' ';
        }
        console.log(result);
    }
}

export default Queue;
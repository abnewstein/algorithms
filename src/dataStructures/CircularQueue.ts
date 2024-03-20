class CircularQueue<T> {
    private items: { [key: number]: T } = {};
    private max: number;
    private rear: number = 0;
    private front: number = 0;

    constructor(size: number) {
        this.max = size;
    }

    isFull(): boolean {
        return (this.rear + 1) % this.max === this.front;
    }

    isEmpty(): boolean {
        return this.front === this.rear;
    }

    enqueue(element: T): boolean {
        if (this.isFull()) {
            return false;
        }
        this.items[this.rear] = element;
        this.rear = (this.rear + 1) % this.max;
        return true;
    }

    dequeue(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.front];
        delete this.items[this.front];
        this.front = (this.front + 1) % this.max;
        return result;
    }

    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.front];
    }

    size(): number {
        return (this.max - this.front + this.rear) % this.max;
    }

    print(): void {
        if (this.isEmpty()) {
            console.log('Queue is empty');
            return;
        }
        let result = '';
        if (this.rear > this.front) {
            for (let i = this.front; i < this.rear; i++) {
                result += this.items[i] + ' ';
            }
        } else {
            for (let i = this.front; i < this.max; i++) {
                result += this.items[i] + ' ';
            }
            for (let i = 0; i < this.rear; i++) {
                result += this.items[i] + ' ';
            }
        }
        console.log(result);
    }
}

export default CircularQueue;

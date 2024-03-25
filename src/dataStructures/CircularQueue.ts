class CircularQueue<T> {
    private items: Array<T> = [];
    private max: number;
    private currentLength: number = 0;
    private rear: number = -1;
    private front: number = -1;

    constructor(size: number) {
        this.items = new Array(size);        
        this.max = size;
    }

    isFull(): boolean {
        return this.currentLength === this.max;
    }

    isEmpty(): boolean {
        return this.currentLength === 0;
    }

    enqueue(element: T): boolean {
        if (this.isFull()) {
            return false;
        }
        this.rear++;
        this.items[this.rear] = element;
        this.currentLength++;
        if (this.front === -1) {
            this.front = this.rear;
        }
        return true;
    }

    dequeue(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        const element = this.items[this.front];
        this.front++;
        this.currentLength--;
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else if (this.front === this.max) {
            this.front = 0;
        }
        return element;
    }

    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.front];
    }

    get size(): number {
        return this.currentLength;
    }

    print(): void {
        let str = '';
        for (let i = 0; i < this.currentLength; i++) {
            str += this.items[i] + ' ';
        }
        console.log(str);
    }
}

export default CircularQueue;

import { test, expect } from 'bun:test';
import LinkedList from '../LinkedList';
import LinkedListStack from '../LinkedListStack';
import LinkedListQueue from '../LinkedListQueue';
import CircularQueue from '../CircularQueue';
import DoublyLinkedList from '../DoublyLinkedList';

test('LinkedList', () => {
    const linkedList = new LinkedList<number>();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    expect(linkedList.toArray()).toEqual([1, 2, 3]);
    linkedList.prepend(0);
    linkedList.insert(2, 1.5);
    expect(linkedList.toArray()).toEqual([0, 1, 1.5, 2, 3]);
    linkedList.remove(1);
    linkedList.removeValue(1.5);
    linkedList.reverse();
    expect(linkedList.toArray()).toEqual([3, 2, 0]);
});

test('LinkedListStack', () => {
    const stack = new LinkedListStack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.peek()).toBe(2);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.size).toBe(2);
});

test('LinkedListQueue', () => {
    const queue = new LinkedListQueue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.peek()).toBe(2);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.size).toBe(2);
});

test('CircularQueue', () => {
    const queue = new CircularQueue<number>(3);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.peek()).toBe(2);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.size).toBe(2);
});

test('DoublyLinkedList', () => {
    const linkedList = new DoublyLinkedList<number>();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    expect(linkedList.toArray()).toEqual([1, 2, 3]);
    linkedList.prepend(0);
    linkedList.removeFront();
    expect(linkedList.toArray()).toEqual([1, 2, 3]);
    linkedList.removeBack();
    expect(linkedList.toArray()).toEqual([1, 2]);
});
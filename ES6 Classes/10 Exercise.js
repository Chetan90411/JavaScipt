
const _items = new WeakMap();
class Stack {
    constructor() {
        _items.set(this, []);
    }

    push(item) {
        _items.get(this).push(item);
    }

    pop() {
        const item = _items.get(this);

        if(item.length === 0)
            throw new Error('Stack is Empty');

        console.log(item.pop());
    }

    peek() {
        const item = _items.get(this);

        if(item.length === 0)
            throw new Error('Stack is Empty');

        return item[item.length -1];
    }

    get count() {
        return _items.get(this).length;
    }
}
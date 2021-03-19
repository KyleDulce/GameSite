
export class Queue<T> {
    
    public data: T[] = [];
    
    addbeginning(v: T) {
        this.data.unshift(v);
    }

    addEnd(v: T) {
        this.data.push(v);
    }

    peekBeginning(): T {
        return this.data[0];
    }

    peekEnd(): T{
        return this.data[this.data.length-1];
    }

    popBeginning(): T {
        return this.data.shift();
    }

    popEnd(): T {
        return this.data.pop();
    }

    size(): number {
        return this.data.length;
    }
}
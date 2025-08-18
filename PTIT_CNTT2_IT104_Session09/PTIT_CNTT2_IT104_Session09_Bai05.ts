class DataStore<T>{
    private data: T[]

    constructor(data: T[]) {
        this.data = data
    }
    add(item: T): void{
        this.data.push(item)
    }

    getAll(): T[] {
        return this.data
    }

    remove(index: number): void{
        if (index < 0 || index > this.data.length) {
            console.log("Invalid Id");
        } else {
            this.data.splice(index, 1);
        }
    }
}
const store = new DataStore<number>([10, 20, 30]);
console.log(store.getAll())

store.add(40)
console.log(store.getAll())

store.remove(1)
console.log(store.getAll())
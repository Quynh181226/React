function reverse1<T>(arr:T[]): void{
    arr.reverse()
}
const arr: Array<number>=[1, 2, 3]
reverse1(arr)
console.log(arr)
const str:Array<string>=['a', 'b', 'c']
reverse1(str)
console.log(str)
const findEl=<T>(arr: T[], val: T): T|undefined=>{
    return arr.find((e)=>e===val)
}
console.log(findEl([1, 2, 4], 6))
console.log(findEl(['a', 'b'], 'a'))
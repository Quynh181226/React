const numEven=<T extends number>(arr: T[]):T| undefined=>{
    for (const tmp of arr){
        if(tmp%2===0){
            return tmp
        }
    }
    return undefined
}
console.log(numEven([1, 3, 5]))
console.log(numEven([2, 4, 9]))
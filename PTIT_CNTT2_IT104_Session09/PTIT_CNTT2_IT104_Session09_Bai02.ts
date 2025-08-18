const wrapInArray=<T>(input: T): T[]=>{
    let arr = [];
    arr.push(input);
    return arr;
}

console.log(wrapInArray(5), wrapInArray("helloo"), wrapInArray({a: 1}))
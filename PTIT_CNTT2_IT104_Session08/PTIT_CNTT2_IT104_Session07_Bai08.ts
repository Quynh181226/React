function partialUpdate<T>(obj:T, update:T):T{
    return {...obj, ...update}
}

console.log(partialUpdate({ name: 'Alice', age: 30, job: 'Developer' },{ age: 31 }))
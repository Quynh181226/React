const mergeObjects=<T, U>(obj1: T, obj2: U) =>{
    return { ...obj1, ...obj2 }
}

let person = { name: "John" }
let job = { role: "Dev" }
console.log(mergeObjects(person, job))
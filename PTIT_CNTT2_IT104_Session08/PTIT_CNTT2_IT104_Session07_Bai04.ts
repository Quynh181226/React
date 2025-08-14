function megre<T, U>(a: T, b: U){
    return {...a, ...b}
}
const obj1={job: 'Dev', department: 'IT'}
const obj2={age: 22}
console.log(megre(obj1, obj2))
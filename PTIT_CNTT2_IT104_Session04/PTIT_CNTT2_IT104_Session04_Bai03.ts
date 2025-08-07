interface Stu{
    name:string
    age:number
    email:string
}
const print=(stu:Stu): void=>{
    console.log(`Name: ${stu.name}, age: ${stu.age}, ${stu.email}`)
}
const stu1: Stu = {
    name: 'Quynh',
    age: 18,
    email: 'quynh@icloud.com'
}
print(stu1)
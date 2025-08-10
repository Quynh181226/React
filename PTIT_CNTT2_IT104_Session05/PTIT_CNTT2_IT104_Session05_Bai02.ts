class Student{
    id:number
    age:number
    email:string
    constructor(id:string, age:number, email:string){
        this.id = id
        this.age = age
        this.email = email
    }
    getInfor(): string{
        return `${this.id} ${this.age} ${this.email}`
    }
}
const stu: Student[] = []
stu.push(new Student(1, 22, 'qaa@icloud.com'))
stu.push(new Student(2, 23, 'qaa@icloud.com'))
stu.push(new Student(3, 24, 'qaa@icloud.com'))
for (const i of stu){
    console.log(i.getInfor())
}
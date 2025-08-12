class Student{
    private id: string
    name: string
    constructor(id: string, name: string) {
        this.id = id
        this.name = name
    }
    idStudent(): string {
        return this.id
    }
}
let allStudents: Student[] = []
class Classroom {
    students: Student[] = []

    addStudent(student: Student) {
        this.students.push(student)
    }

    showStudent() {
        console.log(this.students)
    }

    filterStudent(id: string) {
        const newStudent = this.students.find((e) => e.idStudent() == id)
        console.log(newStudent)
    }

    addStudentAll(id: string) {
        const stIdx = allStudents.findIndex((e) => e.idStudent() == id)
        if (stIdx != -1) {
            const st = allStudents[stIdx]
            this.students.push(st)
            allStudents.splice(stIdx, 1)
        } else {
            console.log('Not found')
        }
    }
}
allStudents.push(new Student("1", "Quynh"))
allStudents.push(new Student("2", "Thuan"))
allStudents.push(new Student("3", "Tu"))
allStudents.push(new Student("4", "Hai"))
allStudents.push(new Student("5", "Hung"))
allStudents.push(new Student("6", "Nhi"))

const a = new Classroom()
const b = new Classroom()

a.addStudentAll("1")
a.addStudentAll("2")
a.addStudentAll("3")

b.addStudentAll("4")
b.addStudentAll("5")
b.addStudentAll("6")

console.log("Classroom a:", a.students)
console.log("Classroom b:", b.students)
// class Student{
//     private id: string
//     name: string
//     constructor(id: string, name: string) {
//         this.id = id
//         this.name = name
//     }
//     idStudent(): string {
//         return this.id
//     }
// }
// let allStudents: Student[] = []
// class Classroom {
//     students: Student[] = []
//     addStudent(student: Student) {
//         this.students.push(student)
//     }
//     showStudent() {
//         console.log(this.students)
//     }
//     filterStudent(id: string) {
//         const newStudent = this.students.find((e) => e.idStudent() == id)
//         console.log(newStudent)
//     }
//     addStudentAll(id: string) {
//         const stIdx = allStudents.findIndex((e) => e.idStudent() == id)
//         if (stIdx != -1) {
//             const st = allStudents[stIdx]
//             this.students.push(st)
//             allStudents.splice(stIdx, 1)
//         } else {
//             console.log('Not found')
//         }
//     }
//     removeStudent(id: string) {
//         const stIdx = this.students.findIndex((e) => e.idStudent() == id)
//         if(stIdx != -1) {
//             const st1=this.students.splice(stIdx, 1)
//             allStudents.push(st1[0])
//         }else{
//             console.log('Not found')
//         }
//     }
//     editStudent(id: string, value: string) {
//         const stIdx = this.students.findIndex((e) => e.idStudent() == id)
//         if(this.students[stIdx]){
//             this.students[stIdx].name = value
//         }else {
//             console.log('Not found')
//         }
//     }
// }
// allStudents.push(new Student("1", "Quỳnh"))
// allStudents.push(new Student("2", "Thuận"))
// allStudents.push(new Student("3", "Tú"))
// allStudents.push(new Student("4", "Hải"))
// allStudents.push(new Student("5", "Hùng"))
// allStudents.push(new Student("6", "Nhi"))
//
// const a = new Classroom()
// const b = new Classroom()
//
// a.addStudentAll("1")
// a.addStudentAll("2")
// a.addStudentAll("3")
//
// b.addStudentAll("4")
// b.addStudentAll("5")
// b.addStudentAll("6")
//
// b.removeStudent('5')
// console.log(b)
// a.editStudent('4', 'Hiếu')
// console.log(a)
abstract class person{
    name: string
    constructor(name: string) {
        this.name=name
    }
    abstract displayInfo(): void
}
class student extends person{
    id: string
    constructor(name: string, id: string) {
        super(name)
        this.id=id
    }
    displayInfo(): void {
        console.log(this.id, this.name)
    }
}
class teacher extends person{
    subject: string
    constructor(name: string, subject: string) {
        super(name)
        this.subject=subject
    }
    displayInfo(): void {
        console.log(this.name, this.subject)
    }
}
const teacher1=new teacher('TS. Ngô Tiến Đức', 'NMCNPM')
teacher1.displayInfo()
const stu=new student('Minh', 'D001')
stu.displayInfo()